import React ,{useRef} from 'react';
const Video = (props) => {
    const {id,user,song,description,like,share,message,video} = props.video;
    const ref1 = useRef();
    //handle video play pause
    const handlevideo = () =>{
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        let callback = (entries, observer)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(ref1.current.paused){
                        ref1.current.play();
                        ref1.current.loop = true;
                    }else{
                        ref1.current.pause();
                    }
                }else{
                    ref1.current.pause();
                }
            });
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(ref1.current);
    }
    return (
            <div className="video">
                <video ref={ref1} onClick={handlevideo} src={video} className="video__player"></video>
                {/* sidebar */}
                <div className="videoSidebar">
                    {
                        props.liker.find(val => val === id)? 
                        <div className="videoSidebar__button">
                            <span className="material-icons" style={{color:'red'}} onClick={()=>props.handleLike(id)}>
                            favorite
                            </span>
                            <p>{like+1}</p>
                        </div>
                        :
                        <div className="videoSidebar__button">
                            <span className="material-icons" onClick={()=>props.handleLike(id)}>
                                favorite_border
                            </span>
                            <p>{like}</p>
                        </div>
                    }
                    <div className="videoSidebar__button">
                        <span className="material-icons">
                            chat
                        </span>
                        <p>{message}</p>
                    </div>
                    <div className="videoSidebar__button">
                        <span className="material-icons">
                            share
                        </span>
                        <p>{share}</p>
                    </div>
                </div>
                {/* videoFooter */}
                <div className="videoFooter">
                    <div className="videoFooter__text">
                        <h3>{user}</h3>
                        <p className="videoFooter__description">{description}</p>
                        <div className="videoFooter__ticker">
                            <span className="material-icons videoFooter__icon">music_note</span>
                            <marquee>{song}</marquee>
                        </div>
                    </div>
                    <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
                </div>
            </div>
        );
};

export default Video;