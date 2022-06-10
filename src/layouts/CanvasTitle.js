export default function CanvasTitle({judul = '', deskripsi = ''}) {
    return (
        <div className="w-full h-52 bg-blue-800 pt-20 bg-contain bg-no-repeat bg-blend-overlay bg-right-top" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/pattern.png'})`,
        }}>
            <div className="w-11/12 mx-auto p-4 mt-6">
                <h1 className="text-white font-medium text-2xl my-1">{judul}</h1>
                <p className="text-white font-light">{deskripsi}</p>
            </div>
        </div>
    )
};
