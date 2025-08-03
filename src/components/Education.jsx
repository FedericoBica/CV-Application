import { useState } from 'react';
import '../styles/components.css';

const Education = ({data, onSubmit, isEditing, onEdit}) => {
    const [formData, setFormData] = useState({
        school: data.school || '',
        degree: data.degree || '',
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
        if (formData.school && formData.degree && formData.startDate && formData.endDate) {
          onSubmit(formData);
        }
      };

    if (isEditing) {
        return (
          <div className="section-card">
            <h2 className="section-title">Experiencia Educativa</h2>
            <div className="form-container">
              <div className="input-group">
                <label className="input-label">Institución educativa</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Nombre de la universidad/escuela"
                />
              </div>
              <div className="input-group">
                <label className="input-label">Título/Carrera</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Ej: Licenciatura en Ingeniería de Software"
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
                <h2 className="section-title">Experiencia Educativa</h2>
                <button onClick={onEdit} className="btn-secondary">
                Editar
                </button>
            </div>
            <div className="display-content">
                <h3 className="display-subtitle">{data.degree}</h3>
                <p className="display-institution">{data.school}</p>
                <p className="display-text">
                {data.startDate && data.endDate && 
                    `${new Date(data.startDate).getFullYear()} - ${new Date(data.endDate).getFullYear()}`
                }
                </p>
            </div>
        </div>
    )
}

export default Education;
