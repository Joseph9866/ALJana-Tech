import { useState, useEffect } from 'react';
import { supabase } from './supabase';

export const useRealTimeData = (tableName: string, filter?: { column: string; value: any }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        let query = supabase.from(tableName).select('*');

        if (filter) {
          query = query.eq(filter.column, filter.value);
        }

        const { data: fetchedData, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setData(fetchedData || []);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();

    // Set up real-time subscription
    const channel = supabase
      .channel(`public:${tableName}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: tableName,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setData((prevData) => [payload.new, ...prevData]);
          } else if (payload.eventType === 'UPDATE') {
            setData((prevData) =>
              prevData.map((item) => (item.id === payload.new.id ? payload.new : item))
            );
          } else if (payload.eventType === 'DELETE') {
            setData((prevData) => prevData.filter((item) => item.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [tableName, filter?.column, filter?.value]);

  return { data, isLoading, error };
};
