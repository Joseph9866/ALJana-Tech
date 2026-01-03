import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2, X, Save, Eye, EyeOff } from 'lucide-react';

interface ContentManagerProps {
  contentType: string;
  title: string;
  fields: Field[];
  onBack?: () => void;
}

interface Field {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'email' | 'url' | 'number' | 'date' | 'checkbox' | 'array';
  required?: boolean;
  placeholder?: string;
}

const ContentManager: React.FC<ContentManagerProps> = ({ contentType, title, fields, onBack }) => {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState('');

  useEffect(() => {
    loadItems();
  }, [contentType]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  };

  const loadItems = async () => {
    setIsLoading(true);
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(
        `${supabaseUrl}/functions/v1/admin-content/${contentType}`,
        {
          headers: getAuthHeaders(),
        }
      );

      if (!response.ok) throw new Error('Failed to load items');

      const data = await response.json();
      setItems(data.data || []);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const url = editingItem
        ? `${supabaseUrl}/functions/v1/admin-content/${contentType}/${editingItem.id}`
        : `${supabaseUrl}/functions/v1/admin-content/${contentType}`;

      const response = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save item');

      await loadItems();
      setShowForm(false);
      setEditingItem(null);
      setFormData({});
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(
        `${supabaseUrl}/functions/v1/admin-content/${contentType}/${id}`,
        {
          method: 'DELETE',
          headers: getAuthHeaders(),
        }
      );

      if (!response.ok) throw new Error('Failed to delete item');

      await loadItems();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingItem(null);
    const initialData: any = {};
    fields.forEach(field => {
      if (field.type === 'checkbox') {
        initialData[field.name] = false;
      } else if (field.type === 'array') {
        initialData[field.name] = [];
      } else {
        initialData[field.name] = '';
      }
    });
    setFormData(initialData);
    setShowForm(true);
  };

  const handleInputChange = (fieldName: string, value: any) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const renderField = (field: Field) => {
    const value = formData[field.name] || '';

    if (field.type === 'textarea') {
      return (
        <textarea
          value={value}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          required={field.required}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={field.placeholder}
          rows={4}
        />
      );
    }

    if (field.type === 'checkbox') {
      return (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => handleInputChange(field.name, e.target.checked)}
            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Enable</span>
        </div>
      );
    }

    if (field.type === 'array') {
      const arrayValue = Array.isArray(value) ? value : [];
      return (
        <div className="space-y-2">
          {arrayValue.map((item: string, index: number) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newArray = [...arrayValue];
                  newArray[index] = e.target.value;
                  handleInputChange(field.name, newArray);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={field.placeholder}
              />
              <button
                type="button"
                onClick={() => {
                  const newArray = arrayValue.filter((_, i) => i !== index);
                  handleInputChange(field.name, newArray);
                }}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleInputChange(field.name, [...arrayValue, ''])}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            + Add Item
          </button>
        </div>
      );
    }

    return (
      <input
        type={field.type}
        value={value}
        onChange={(e) => handleInputChange(field.name, e.target.value)}
        required={field.required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={field.placeholder}
      />
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add New</span>
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-red-700">
          {error}
        </div>
      )}

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {editingItem ? 'Edit Item' : 'Add New Item'}
              </h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingItem(null);
                  setFormData({});
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingItem(null);
                    setFormData({});
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingItem ? 'Update' : 'Create'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found. Add your first item!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {fields.slice(0, 4).map((field) => (
                    <th
                      key={field.name}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {field.label}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    {fields.slice(0, 4).map((field) => (
                      <td key={field.name} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {field.type === 'checkbox' ? (
                          item[field.name] ? (
                            <Eye className="w-4 h-4 text-green-600" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-gray-400" />
                          )
                        ) : field.type === 'array' ? (
                          <span className="text-gray-500">
                            {Array.isArray(item[field.name]) ? item[field.name].length : 0} items
                          </span>
                        ) : (
                          <span className="truncate max-w-xs block">
                            {String(item[field.name] || '-').slice(0, 50)}
                          </span>
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManager;
