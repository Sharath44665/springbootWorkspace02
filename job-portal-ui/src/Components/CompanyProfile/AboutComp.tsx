import { companyData } from "../../Data/Company";

const AboutComp = () => {
    const companyValue: { [key: string]: any } = companyData;
    return (

        <>
            {
                Object.keys(companyValue).map((key, idx) =>
                    key != 'Name' && <div key={idx}>

                        <div className="text-xl mb-3 font-semibold text-justify">{key} </div>

                        {key != 'Website' && <div className="mb-4">{key != 'Specialties' ? companyValue[key] : companyValue[key].map((item: any, id: any) => <span key={id}> &bull; {item} </span>)} </div>}

                        {key == 'Website' && <div className="mb-5"><a className="text-blue-600" href={companyValue[key]} target='_blank' >{companyValue[key]} </a></div>}
                    </div>
                )
            }
        </>
    )
}

export default AboutComp;