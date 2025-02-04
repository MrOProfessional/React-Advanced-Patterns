export type Props = {
    name: string;
    lastName: string; 
    setName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
}