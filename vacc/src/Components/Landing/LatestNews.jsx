import './LatestNews.css'
import ArrowR from '../../assets/Arrow-right.svg'
import MediaCard from './MediaCard'
import { useEffect, useState } from "react";

export default function () {
    const [expanded, setExpanded] = useState(false);
    function clicked(){
        setExpanded(!expanded)
    } 
    return (
        <div className='LatestNews'>
            <div className='Heading'>
                <h1 class="font-semibold">Latest News</h1>
                <button className='expand' onClick={clicked}><h1>{expanded ? "Fewer" : "All"}</h1><img src={ArrowR} /></button>
            </div>
            <hr />
            <div className='row1'>
                <MediaCard
                    title="US to end funding for childhood vaccines in poorest countries, document shows"
                    src="Reuters"
                    date="March 27, 2025"
                    img="https://www.reuters.com/resizer/v2/ODDMPKU65VNY5MTTROWSNRWRM4.jpg?auth=e82df8adcabd2d1357c706de58b04f03dbb496cac11d01a6a88f575cc99c63fe&width=640&quality=80"
                    link="https://www.reuters.com/business/healthcare-pharmaceuticals/trump-administration-end-funding-child-vaccines-developing-countries-new-york-2025-03-26/   "
                />
                <MediaCard
                    title="Types of data requested to inform May 2025 COVID-19 vaccine antigen composition deliberations"
                    src="WHO"
                    date="March 25, 2025"
                    link="https://www.who.int/news/item/25-03-2025-types-of-data-requested-to-inform-may-2025-covid-19-vaccine-antigen-composition-deliberations"
                />
                <MediaCard
                    title="Karnataka to offer free HPV vaccination to prevent cervical cancer in adolescent girls"
                    src="Gujrat Samachar"
                    date="March 27, 2025"
                    img="https://static.gujaratsamachar.com/content_image/content_image_ae427f89-edfd-45cb-90b3-d71c5da37c87.jpeg"
                    link="https://english.gujaratsamachar.com/news/health/karnataka-to-offer-free-hpv-vaccination-to-prevent-cervical-cancer-in-adolescent-girls"
                />
                <MediaCard
                    title="Adult BCG vaccination programme launched in Karnataka to combat tuberculosis"
                    src="Times of India"
                    date="March 27, 2025"
                    img="https://static.toiimg.com/thumb/msid-117518771,imgsize-97769,width-400,height-225,resizemode-72/117518771.jpg"
                    link="https://timesofindia.indiatimes.com/city/bengaluru/adult-bcg-vaccination-programme-launched-in-karnataka-to-combat-tuberculosis/articleshow/119494337.cms"
                />
            </div>
            <div className='row2'
                style={{
                    visibility: expanded ? "visible" : "hidden",
                    height: expanded ? "auto" : "0px",
                    overflow: expanded ? "visible" : "hidden",
                    transition:".15s"
                }}
            >
                <MediaCard
                    title="A bad omen for public trust in vaccines"
                    src="The Hindu"
                    date="March 26, 2025"
                    img="https://th-i.thgim.com/public/incoming/wdg8ws/article69373293.ece/alternates/LANDSCAPE_1200/IMG_iStock-1324195075_2_1_5KCPEBGD.jpg"
                    link="https://www.thehindu.com/opinion/op-ed/a-bad-omen-for-public-trust-in-vaccines/article69373285.ece"
                />
                <MediaCard
                    title="Scientifically Speaking: Five years after Covid-19, mRNA vaccines still matter"
                    src="Hindustan Times"
                    date="March 25, 2025"
                    img="https://www.hindustantimes.com/ht-img/img/2025/03/25/550x309/Vials-of-Covid-19-mRNA-vaccines---Reuters-File-Pho_1742898386706.jpg"
                    link="https://www.thehindu.com/opinion/op-ed/a-bad-omen-for-public-trust-in-vaccines/article69373285.ece"
                />
                <MediaCard
                    title="US govt cover-ups, pharma lies on fake vaccines EXPOSED: Doctor on Joe Rogan's podcast REVEALS truth"
                    src="DNA India"
                    date="March 27, 2025"
                    img="https://cdn.dnaindia.com/sites/default/files/2025/03/27/2685169-us-govt-cover-ups-pharma-lies-on-fake-vaccines-exposed-doctor-on-joe-rogan-s-podcast-reveals-truth.jpg?im=FitAndFill=(1200,900)"
                    link="https://www.dnaindia.com/viral/report-us-govt-cover-ups-pharma-lies-on-fake-vaccines-exposed-doctor-on-joe-rogan-s-podcast-reveals-truth-3141429"
                />
                <MediaCard
                    title="New review finds vaccines could drastically reduce global hearing loss in children"
                    src="Gavi"
                    date="March 27, 2025"
                    img="https://www.gavi.org/sites/default/files/vaccineswork/2025/Header/Vaccination-in-indonesia_Gavi-2024-WISMOYO.jpg"
                    link="https://www.gavi.org/vaccineswork/new-review-finds-vaccines-could-drastically-reduce-global-hearing-loss-children"
                />
            </div>
        </div>
    )
}