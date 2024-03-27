import { useEffect } from "react";
import { fetchSymbols } from "../store/features/elementsSlice"
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

interface SymbolSquareProps {
    symbol: string;
}

const MatchingResult = () => {
    const {
        firstName,
        firstSymbol,
        lastName,
        lastSymbol
    } = useSelector((state: any) => state.elements);

    const dispatch: Dispatch<any> = useDispatch()

    // Simulate API call
    useEffect(() => {
        dispatch(fetchSymbols())
    }, [dispatch]);
    

    return (
        <div className="w-full h-96 flex flex-col justify-center items-center gap-4 text-white text-8xl font-semibold">
            { firstName && (
                <h3 className="flex items-center">
                    { firstSymbol && (<SymbolSquare symbol={firstSymbol} />)}
                    {firstName}
                </h3>
            ) }
            { lastName && (
                <h3 className="flex items-center">
                    { lastSymbol && (<SymbolSquare symbol={lastSymbol} />)}
                    {lastName}
                </h3>
            )}
        </div>
    );
}

const SymbolSquare = ({ symbol }: SymbolSquareProps) => (
    <span className="min-w-24 flex justify-center bg-primary py-2.5 px-1.5">{symbol}</span>)

export default MatchingResult;