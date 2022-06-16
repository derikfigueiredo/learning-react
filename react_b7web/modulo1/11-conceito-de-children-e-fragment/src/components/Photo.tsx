type Props = {
    url:string;
    legend:string;
}

export const Photo = ({url, legend}:Props) => {
    return (
        //Fragmentos: Parecem tags vazia (<></>). Você pode usar <></> da mesma forma que você 
        //usaria qualquer outro elemento, exceto que ele não suporta chaves ou atributos.
        //Com o uso dele, os elementos dentro dele serão colocados sem elemento pai na estrutura HTML
        <>
        <img src={url} />
        <p>{legend}</p>
        </>
    );
}