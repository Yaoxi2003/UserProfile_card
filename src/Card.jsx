import { useState } from 'react'

export default function Card(props) {
    const [shareLink, setShareLink] = useState(false)
    const menu = (<div className='absolute bg-slate-700 top-139 bottom-0 left-0 right-0 flex items-center gap-6 py-4 px-7 rounded-b-xl z-[2] md:rounded-xl md:top-40 md:bottom-25 md:left-150 md:-right-15'>
                    <h2 className='tracking-[5px] uppercase text-slate-400'>share</h2>
                    <a href="https://www.facebook.com/"><img src={props.facebookIcon} alt="facebook icon" className='w-5 h-5'/></a>
                    <a href="https://https://x.com/i/flow/login?redirect_after_login=%2Fexplore.pinterest.com/"><img src={props.twitterIcon} alt="twitter icon" className='w-5 h-5'/></a>
                    <a href="https://nl.pinterest.com/"><img src={props.pinterestIcon} alt="pinterest icon" className='w-5 h-5'/></a>
                </div>)

    function handleEvent() {
       setShareLink(prev => !prev)
    }

    return (
        <article className='relative flex flex-col rounded-xl shadow bg-white w-4/5 min-w-[320px] max-w-[340px] md:flex-row md:justify-between md:items-center md:max-w-[800px]'>
            <img src={props.img} className='object-cover w-full rounded-t-xl lg-img md:w-1/2 md:rounded-l-xl md:h-full'/>
            <div className='article-content p-8 pt-11 md:py-4'>
                <h2 className='text-xl text-slate-600 font-bold'>{props.articleTitle}</h2>
                <p className='text-sm mt-6 mb-10 leading-[1.7]'>{props.articleContent}</p>
                <div className='flex gap-4 items-center'>
                    <img src={props.profile.src} alt={props.profile.alt} className='rounded-full w-10 h-10'/>
                    <div className='flex flex-col'>
                        <h3 className='text-sm text-slate-600'>{props.profile.name}</h3>
                        <p className='text-xs'>{props.profile.postTime}</p>
                    </div>
                    <button onClick={handleEvent} className='rounded-full bg-slate-400 w-9 h-9 flex justify-center items-center ml-auto z-3'><img src={props.shareIcon} className='w-6 h-6'/></button>
                </div>
            </div>
            {shareLink && <div id="share-menu">{menu}</div>}
        </article>
    )
}
