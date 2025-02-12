const CertificationCard = (props:any) => {
    return (
        <>
        <div className="flex bg-[#f4f4f4] text-black rounded-3xl p-2 justify-between">
                <div className="flex gap-2 items-center capitalize ">
                    <div className="p-1">
                        <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="microsoft" />
                    </div>
                    <div>
                        <div className="text-lg">{props.name}</div>
                        <div>{props.issuer}</div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div>{props.issueDate}</div>
                    <div>ID: {props.certificateId}</div>
                </div>
            </div>
        </>
    )
}


export default CertificationCard;