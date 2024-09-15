import useMailer from "@/hooks/useMailer";
import React, { createContext, useContext } from "react";

const mailerCtx = createContext({});
export const MailerContext = ({ children }: { children: React.ReactNode }) => {
    return (
        <mailerCtx.Provider value={{ ...useMailer() }}>
            {children}
        </mailerCtx.Provider>
    );
};
const useMailerCtx = () => useContext(mailerCtx);
export default useMailerCtx;