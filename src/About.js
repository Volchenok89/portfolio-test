function About() {
    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "inline-block"}}>
                    <img className="about-user-avatar" src={process.env.PUBLIC_URL + "/me.jpg"} alt="Me"></img>
                    <span style={{display: "block", textAlign: "center", marginTop: "12px", fontWeight: "bold"}}>M. Rivera</span>
                </div>
            </div>
            <div>
                <p style={{fontSize: "50px", color: "#0ab70a", textAlign: "center"}}>I am a freelancer coder in Los Angeles, California. Been in business since 2020 and specialize in HTML and CSS. I find the logic of coding and its structures very interesting and I always try to learn more.</p>
            </div>
        </>
    );
}

export default About;