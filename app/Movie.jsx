import  Link from "next/link"
import Image from "next/image";
export default function Movie({title, id, poster_path, release_date}) {
    const imagePath = 'https://image.tmdb.org/t/p/original'
    return(
        <div>
            <Link href={`/${id}`}>   {/*we update the link later*/}
                <img src={imagePath + poster_path} alt={title} width={1000} height={1000}/>
                {/*<Image src={imagePath + poster_path} width={800} height={800} alt={title}/>*/}
            </Link>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
        </div>
    )
}
