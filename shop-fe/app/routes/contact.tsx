export default function Contact() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('finish'), 2000)
    }).then(res => console.log(res));


    return (
        <>
        <h1>Contact page</h1>
        <p>Feel free to contact us</p>

        <div className="grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <style>
            {`
            h1 {color: blue;}
            `}
        </style>
        </>
    )
}