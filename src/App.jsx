import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import './styles/App.css'

function App() {
  //estados para almacenar los datos de cada seccion
  const [generalInfo, setGeneralInfo] = useState({});
  const [experience, setExperience] = useState({});
  const [education, setEducation] = useState({});

  //estados para controlar el modo edicion de cada seccion
  const [editingGeneral, setEditingGeneral] = useState(true);
  const [editingExperience, setEditingExperience] = useState(true);
  const [editingEducation, setEditingEducation] = useState(true);
  
  //funciones para manejar el envio de formularios
  const handleGeneralSubmit = (data) => {
    setGeneralInfo(data);
    setEditingGeneral(false);
  }

  const handleExperienceSubmit = (data) => {
    setExperience(data);
    setEditingExperience(false);
  }

  const handleEducationSubmit = (data) => {
    setEducation(data);
    setEditingEducation(false);
  }

  return (
    <div className='app-container'>
      <div className='main-container'>
        <div className='header-section'>
          <h1 className='main-title'> CV Generator</h1>
          <p className='main-subtitle'>
            Crea tu curriculum profesional de manera facil y rapida.
          </p>
        </div>
        <div className='content-wrapper'>
          <GeneralInfo
            data={generalInfo}
            onSubmit={handleGeneralSubmit}
            isEditing={editingGeneral}
            onEdit={() => setEditingGeneral(true)}
          />

          <Education
            data={education}
            onSubmit={handleEducationSubmit}
            isEditing={editingEducation}
            onEdit={() => setEditingEducation(true)}
          />
          
          <Experience
            data={experience}
            onSubmit={handleExperienceSubmit}
            isEditing={editingExperience}
            onEdit={() => setEditingExperience(true)}
          />

        {/*boton para imprimir cv*/}
        {!editingGeneral && !editingEducation && !editingExperience && (
          <div className='print-section'>
            <button 
              onClick={() => window.print()}
              className='btn-print'
            >
              Imprimir CV
            </button>
          </div>
        )}
        </div>
      </div>
      <div className='footer'>
          <p>Construido con React</p>
      </div>
    </div>
  )
}

export default App
