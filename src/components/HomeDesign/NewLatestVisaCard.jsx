import { Link } from 'react-router-dom';

const NewLatestVisaCard = ({ visa }) => {
    return (
        <div className=''>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-full">
                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={visa.photoUrl} alt="Country specific photo" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">{visa.country}</h1>
                    <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                    <div className="card-actions justify-center">
                        <Link to={`/allvisas/${visa._id}`} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See Details</Link>
                    </div>
                </div>
            </div>
            {/* <div className="card image-full hover:shadow-2xl">
                <figure className=''>
                    <img
                        className='object-fill min-h-[300px] w-full'
                        src={visa.photoUrl}
                        alt="Country specific photo" />
                </figure>
                <div className="card-body text-center space-y-3">
                    <h2 className=" text-white text-xl font-bold">{visa.country}</h2>
                    <div className='text-white font-bold'>Visa types: <br />

                        {
                            visa.visaType.map((item, i) => <p className="badge badge-outline" key={i}>{item}</p>)
                        }

                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/allvisas/${visa._id}`} className="btn bg-gray-500 text-white">See Details</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default NewLatestVisaCard;