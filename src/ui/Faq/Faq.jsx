import 'tailwindcss/tailwind.css'

const Faq = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
            <div className="collapse collapse-plus " >
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium" style={{color:"white"}}>
                    Click to open this one and close others
                </div>
                <div className="collapse-content" style={{color:"white"}}>
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium" style={{color:"white"}}>
                    Click to open this one and close others
                </div>
                <div className="collapse-content" style={{color:"white"}}>
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium" style={{color:"white"}}>
                    Click to open this one and close others
                </div>
                <div className="collapse-content" style={{color:"white"}}>
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;