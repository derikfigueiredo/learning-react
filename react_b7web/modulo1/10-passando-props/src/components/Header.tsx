type Props = {
    title?: string; 
    //colocamos ? para tornar a Prop opcional
}

export const Header = ( {title}: Props ) => {
   return (
    //As expressões JSX devem ter um elemento pai. Dessa forma, utilizamos header como elemento pai de h1 e hr
    <header>
        <h1>{title}</h1>
        <hr />
    </header> 
   );
}