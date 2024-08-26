const Content = ( {contenido} ) => {
    return (
        <>
            <p dangerouslySetInnerHTML={{ __html: contenido }}></p>
        </>
    );
}

export default Content;