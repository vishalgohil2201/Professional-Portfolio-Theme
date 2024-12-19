
const ServicesCard = ({services}) =>{
    return(
        <>
            <div className="row">
                    {
                        services.map((data,i) => {
                            return(
                                
                                    <div className="col-12 col-md-6 col-xl-4" key={i}>
                                        <div className="box text-center">
                                            <div className="card-icon">
                                                {data.icon}
                                            </div>
                                            <div className="card-title">
                                                <h4>{data.name}</h4>
                                            </div>
                                            <div className="card-info">
                                                <p>{data.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                
                            )
                        })
                    }
            </div>
        </>
    )
} 

export default ServicesCard;