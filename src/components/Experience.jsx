import { useState } from 'react';
import '../styles/components.css';

const Experience = ({ data, onSubmit, isEditing, onEdit }) => {
  const [formData, setFormData] = useState({
    company: data.company || '',
    position: data.position || '',
    responsibilities: data.responsibilities || '',
    startDate: data.startDate || '',
    endDate: data.endDate || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.company && formData.position && formData.responsibilities && formData.startDate && formData.endDate) {
      onSubmit(formData);
    }
  };

  if (isEditing) {
    return (
      <div className="section-card">
        <h2 className="section-title">Experiencia Laboral</h2>
        <div className="form-container">
          <div className="input-group">
            <label className="input-label">Empresa</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="input-field"
              placeholder="Nombre de la empresa"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Cargo/Posición</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="input-field"
              placeholder="Ej: Desarrollador Frontend"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Responsabilidades principales</label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              rows="4"
              className="textarea-field"
              placeholder="Describe tus responsabilidades principales..."
            />
          </div>
          <div className="date-grid">
            <div className="input-group">
              <label className="input-label">Fecha de inicio</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Fecha de finalización</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="btn-primary">
            Guardar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-card">
      <div className="section-header">
        <h2 className="section-title">Experiencia Laboral</h2>
        <button onClick={onEdit} className="btn-secondary">
          Editar
        </button>
      </div>
      <div className="experience-display">
        <div className="experience-header">
          <h3 className="display-subtitle">{data.position}</h3>
          <p className="display-institution">{data.company}</p>
        </div>
        <p className="display-text">
          {data.startDate && data.endDate && 
            `${new Date(data.startDate).getFullYear()} - ${new Date(data.endDate).getFullYear()}`
          }
        </p>
        <div className="responsibilities-section">
          <h4 className="responsibilities-title">Responsabilidades:</h4>
          <p className="responsibilities-text">{data.responsibilities}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;