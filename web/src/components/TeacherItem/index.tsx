import React from 'react'
import './styles.css'
import PostImg from '../../assets/images/icons/smile.svg'
import whatZ from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

export interface Teacher{
    id:number,
    avatar:string,
    bio:string,
    cost:number,
    name:string,
    subject:string,
    whatsapp:string
}

interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps>=({teacher})=>{
    function createConnection(){
        api.post('connections',{
            user_id:teacher.id
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={PostImg} alt=""/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
               {teacher.bio}
            </p>
            <footer>
            <p>
                Preço/Hora
                <strong>{teacher.cost}</strong>
            </p>
            <a target="_blank" onClick={createConnection} href={'https://wa.me/${teacher.whatsapp}'}>
                <img src={whatZ} alt=""/>
                Entrar em contato
            </a>
                
            </footer>
         </article>
    )
}

export default TeacherItem