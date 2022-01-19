import Link from "next/link"

export const getStaticProps=async()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return{
        props: {duster : data}
    }
}

const QuickDuster = ({duster}) => {
    return  (
    <h1> All Dusters
        {
            duster.map( duster => 
                <Link href={`/quickduster/${duster.id}`} key={duster.id}>
                    <a >
                        <h3> {duster.name}</h3>
                    </a>
                </Link>
            )
        }
    </h1>
     )
}
 
export default QuickDuster;