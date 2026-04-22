export default function Service(props)
{
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.cost}</p>
        </div>
    )
}