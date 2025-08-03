import {useState} from "react";
import '../styles/components.css'

const GeneralInfo = ({data,onSubmit,isEditing,onEdit}) => {
    const [formData, setFormData] = useState({
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if(formData.name && formData.email && formData.phone) {
            onSubmit(formData);
        }
    };

    if(isEditing) {
        return (
            <div className="section-card">
                <h2 className="section-title">Informacion General</h2>
                <div className="form-container">
                    <div className="input-group">
                        <label className="input-label">Nombre completo</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Tu nombre completo"
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="tu@email.com"
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Nombre completo</label>
                        <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="+598 123 456 789"
                        />
                    </div>
                    <button onClick={handleSubmit} className="btn-primary">
                        Guardar
                    </button>
                </div>
            </div>

        )
    }

    return (
        <div className="section-card">
            <div className="section-header">
                <h2 className="section-title">Informacion General</h2>
                <button onClick={onEdit} className="btn-secondary">
                    Editar
                </button>
            </div>
            <div className="display-content">
                <h3 className="display-name">{data.name}</h3>
                <p className="display-text">{data.email}</p>
                <p className="display-text">{data.phone}</p>
            </div>
        </div>
    )
}

export default GeneralInfo;