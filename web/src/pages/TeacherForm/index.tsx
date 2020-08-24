import React,{useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import {useHistory} from 'react-router-dom'
import api from '../../services/api';


function TeacherForm(){
    const history =useHistory()

    const [name, setName] =useState('')
    const [avatar,setAvatar]=useState('')
    const [whatsapp,setWhatsapp]=useState('')
    const [bio,setBio]=useState('')

    const [subject,setSubject]=useState('')
    const [cost,setCost]=useState('')





    const [scheduleItems,setScheduleItens]=useState([
        {week_day:0,from:'08:00 AM',to:'04:00 PM'}
    ])

    function addNewScheduleItem(){
        setScheduleItens([
            ...scheduleItems,
            {week_day:0,from:'',to:''}
        ])

    }

    function setScheduleItemValue(position: number, field: string, value:string){
        const updateScheduleItems= scheduleItems.map((scheduleItem, index)=>{
            if(index===position){
                return{...scheduleItem,[field]:value }
            }

            return scheduleItem
        })
        setScheduleItens(updateScheduleItems)
    }


    function handleCreateClass(e:FormEvent){
        e.preventDefault()
    }

    api.post('classes',{
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost:Number(cost),
        schedule:scheduleItems
    }).then(()=>{
        alert('Cadastro realizado com sucesso')

        history.push('/')
    }).catch(()=>{
        alert('falha ao cadastrar')
    })

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader  
            title="Que bom ver voçê estudando"
            description="O primeiro passo é preecher esse formulario"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Sobre a Aula</legend>
                        <Input 
                        name="name" 
                        label="Nome Completo" 

                        value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <Input 
                        name="avatar" 
                        label="Avatar" 
                        value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>

                        <Input 
                        name="whatsapp" 
                        label="Whatsapp" 
                        value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>
                        <Textarea 
                        name="bio" 
                        label="Biografia" 
                        value={bio} onChange={(e)=>{setBio(e.target.value)}}/>

                    </fieldset>

                    <fieldset>
                    <legend>Seus Dados</legend>
                        <Select
                        name="subject"
                        label="Materia"
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                        options={[
                        { value:'artes',label:'Artes' },
                        { value:'biologia',label:'Biologia' } ,
                        { value:'ciencias',label:'Ciências' } ,
                        { value:'edFisica',label:'Ed. Fisica' } ,
                        { value:'geografia',label:'Geografia' } ,
                        { value:'historia',label:'Historia' } ,
                        { value:'matematica',label:'Matemática' } ,
                        { value:'aberto',label:'Aberto' } 

                        ]}
                        />
                        <Input
                        name="cost" 
                        label="Custo da sua hora por aula"
                        value={cost}
                        onChange={(e)=>{setCost(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horarios Disponiveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horario
                            </button>
                        </legend>
                    {scheduleItems.map((scheduleItem, index)=>{
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    value={scheduleItem.week_day}
                                    onChange={e=>setScheduleItemValue(index,'week_day',e.target.value)}
                                    options={[
                                        { value:'0',label:'Biologia' } ,
                                        { value:'1',label:'Ciências' } ,
                                        { value:'2',label:'Ed. Fisica' } ,
                                        { value:'3',label:'Geografia' } ,
                                        { value:'4',label:'Historia' } ,
                                        { value:'5',label:'Matemática' } ,
                                        { value:'6',label:'Aberto' } 
            
                                    ]}
                                />
                                <Input
                                name="from"
                                label="Das" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e=>setScheduleItemValue(index,'from',e.target.value)}
                                />
                                <Input
                                name="to"
                                label="Até"
                                type="time"
                                value={scheduleItem.to}
                                onChange={e=>setScheduleItemValue(index,'to',e.target.value)}
                                />
                            </div>
                        
                    )})}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt=""/>
                            Importante! <br/>
                            Preecha todos os dados
                        </p>
                        <button type='button'>
                            Salvar cadastro
                        </button>
                    </footer>

                </form>
            </main>
        </div>
    )
}

export default TeacherForm