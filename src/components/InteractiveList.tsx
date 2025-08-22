import React, { useState } from 'react';

interface ListItem {
  id: number;
  text: string;
  type: 'idea' | 'tarea' | 'link';
  completed: boolean;
}

const InteractiveList: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([]);
  const [newItem, setNewItem] = useState('');
  const [selectedType, setSelectedType] = useState<'idea' | 'tarea' | 'link'>('idea');

  const addItem = () => {
    if (newItem.trim()) {
      const item: ListItem = {
        id: Date.now(),
        text: newItem.trim(),
        type: selectedType,
        completed: false
      };
      setItems(prev => [...prev, item]);
      setNewItem('');
    }
  };

  const toggleItem = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'idea': return '💡';
      case 'tarea': return '✅';
      case 'link': return '🔗';
      default: return '📝';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'idea': return '#ff6b6b';
      case 'tarea': return '#4ecdc4';
      case 'link': return '#45b7d1';
      default: return '#96ceb4';
    }
  };

  return (
    <div className="container animate-fade-in">
      <div className="section-header">
        <h2>Lista Interactiva</h2>
        <p>Agrega ideas, tareas o links importantes</p>
      </div>

      <div className="card">
        <div className="flex flex-wrap" style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe algo..."
            className="form-input"
            style={{ flex: '1', minWidth: '200px' }}
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as 'idea' | 'tarea' | 'link')}
            className="form-input"
            style={{ width: 'auto', minWidth: '140px' }}
          >
            <option value="idea">💡 Idea</option>
            <option value="tarea">✅ Tarea</option>
            <option value="link">🔗 Link</option>
          </select>
          <button onClick={addItem} className="btn">
            Agregar
          </button>
        </div>

        <div>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#718096' }}>
              <p>No hay elementos aún. ¡Agrega el primero!</p>
            </div>
          ) : (
            <div className="flex-column">
              {items.map(item => (
                <div
                  key={item.id}
                  className={`list-item ${item.completed ? 'completed' : ''}`}
                  style={{ borderLeftColor: getTypeColor(item.type) }}
                >
                  <div className="list-content">
                    <span style={{ fontSize: '1.25rem' }}>{getTypeIcon(item.type)}</span>
                    <span>{item.text}</span>
                  </div>
                  <div className="list-actions">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`btn btn-small ${item.completed ? 'btn-secondary' : ''}`}
                    >
                      {item.completed ? '✓' : '○'}
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="btn btn-small"
                      style={{ background: 'var(--accent)' }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#f7fafc',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#4a5568'
          }}>
            <p>
              <strong>Total:</strong> {items.length} |
              <strong>Completadas:</strong> {items.filter(item => item.completed).length} |
              <strong>Pendientes:</strong> {items.filter(item => !item.completed).length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveList;