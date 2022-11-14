import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { randomCharacters } from "../utils/randomCharacters";

export const useId = (prefix: string = 'CP', length: number = 8) => {
    const [id, setId] = useState<string>('');
    const {globalUniqueIds, setGlobalUniqueIds} = useContext(Store);

    useEffect(() => {
        let id: string = '';
        do {
            id = `${prefix}${randomCharacters(length - prefix.length)}`;
            if (document.getElementById(id) && !globalUniqueIds.includes(id)) {
                globalUniqueIds.push(id); // if there are any ids that are generated outside of this hook and we happen to land on it, 
            }
        } while (globalUniqueIds.includes(id));
        globalUniqueIds.push(id);
        setGlobalUniqueIds && setGlobalUniqueIds(globalUniqueIds);
        setId(id);
    }, []);

    return id;
}
