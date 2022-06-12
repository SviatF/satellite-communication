import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTelegram,faInstagram,faPinterest}from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router'
import Link from 'next/link'



export default function Footer({Fetchall}){
    let router = useRouter();
    
       let mndab=
        router.locale==="ua"
        ;



    return(            
<footer>
        <div className='ft-body'>
            <div className='ft-cntr'>
                <div className='ft-item'>
                     <div className='ft-themes'>Останні добавленні статті</div>
                     <Link href={`/news/post/[newsid]`} as={`/news/post/1`}>
                        <div className='ft-rcas-item'>
                        <div className='rcas-txt'>
                            <div className='rcas-themes'>NASA запустило у космос найдорожчий в історії телескоп James Webb</div>
                            <div className='rcas-subt'>Національне управління США з аеронавтики і дослідження космічного простору (NASA) відправило у космос телескоп James Webb, який має замінити Hubble. Він – найдорожчий та найбільший телескоп в історії. Запуск відбувся на космодромі Куру у Французькій Гвіані о 14:20 за українським часом в суботу, 25 грудня. Вартість телескопу – 10 млрд доларів. Він має замінити Hubble, який перебуває у космосі вже понад 30 років.</div>
                        </div>
                        <div className='cont-img'>
                            <img src='https://zaxid.net/resources/photos/news/202112/1532978.jpg?202112251737&fit=cover&w=755&h=425&q=65'></img>
                        </div>
                        </div>
                        </Link>
                        <Link href={`/posts/devices/[deviceid]`} as={`/posts/devices/2`}>
                        <div className='ft-rcas-item'>
                        
                        <div className='rcas-txt'>
                            <div className='rcas-themes'>Система VSAT</div>
                            <div className='rcas-subt'>Серед супутникових технологій особливу увагу привертає розвиток технологій супутникового зв&apos;язку типу VSAT (Very Small Aperture Terminal). На основі VSAT обладнання можлива побудова мультисервісних мереж, що надають практично всі сучасні послуги зв&apos;язку: доступ до Інтернету; телефонний зв&apos;язок; об&apos;єднання локальних мереж (побудова VPN-мереж); передачу аудіо-, відеоінформації; резервування існуючих каналів зв&apos;язку; збір даних, моніторинг та віддалене управління промисловими об&apos;єктами та багато іншого.</div>
                        </div>
                        <div className='cont-img'>
                            <img src='/../../images/6.jpg'></img>
                        </div>
                        </div>
                        </Link>
                        <Link href={`/news/post/[newsid]`} as={`/news/post/2`}>
                        <div className='ft-rcas-item'>
                        <div className='rcas-txt'>
                            <div className='rcas-themes'>NASA відправило унікальну місію до астероїдів Юпітера</div>
                            <div className='rcas-subt'>У суботу, 16 жовтня, американське космічне агентство NASA запустило ракету Atlas V від United Launch Alliance з космічним кораблем «Люсі», який направився до так званих троянських астероїдів Юпітера аби вивчити їх властивості. Про це йдеться у повідомленні NASA.Запуск здійснили зі стартового майданчика на космодромі на мисі Канаверал у Флориді, США, 16 жовтня о 5:34 за місцевим часом.</div>
                        </div>
                        <div className='cont-img'>
                            <img src='https://zaxid.net/resources/photos/news/202110/1528310.jpg?202110171034&fit=cover&w=755&h=425&q=65'></img>
                        </div>
                        
                        </div>
                        </Link>
    </div>
    <div className='ft-item'>
    <div className='ft-themes'>Оновлення</div>
    
     <div className='ft-u-item'>
     <div className='u-themes'>Оптимізація</div>
     <div className='u-date'>06.05.2022</div>
     
     </div>
     
     <div className='ft-u-item'>
        <div className='u-themes'>Новий Дизайн</div>
        <div className='u-date'>04.05.2022</div>
     </div>
     
     <div className='ft-u-item'>
     <div className='u-themes'>Оновлення Системи</div>
     <div className='u-date'>01.05.2022</div>
     
     </div>
     <div className='ft-u-item'>
     <div className='u-themes'>Новий Дизайн</div>
     <div className='u-date'>27.04.2022</div>
     </div>
     </div>
    <div className='ft-item ft-wafu'>
    <div className='ft-themes'>Стати Автором</div>
    <div className='wafu-txt'>
         Якщо ви бажаєте стати автором одним із статтів про супутникові звя&apos;зки. Напишіть нам.
    </div>
    <div className='wafu-gm'>
     <p>Support</p>
      <div className='gm'>support@satellitecommunication.com</div>
    </div>
    </div>
    
    </div>
     <hr className='ft-hr'/>
    <div className='ft-cs'>
        <div>
         <p> 
         <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
         </p>
         <p><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></p>
         <p><FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></p>
         </div>
         <p className='ft-cs-above-p'>© 2022 Satellite | Communication. All Rights Reserved</p>
         <span>lorem</span>
     </div>
</div>
        </footer>
        )
}

Footer.getInitialProps = async ()=>{
    const resall = await fetch(`http://localhost:4040/recent`);
    const Fetchall= await resall.json()
    return({Fetchall})
        
}