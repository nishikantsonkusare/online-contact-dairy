import CardItems from "./CardItems";

const Card = props => {

    const updatedDetail =  props.contactDetail.filter((value)=> { if (props.searchData.length !== 0) { return value.name.toLowerCase().includes(props.searchData.toLowerCase()); } else { return value; } });

    return(
        <>
            {
                updatedDetail.map( value=>(
                <CardItems id={value.id} name={value.name} mobile={value.mobile} address={value.address} key={value.id} />
            ))}
        </>
    )
};

export default Card;