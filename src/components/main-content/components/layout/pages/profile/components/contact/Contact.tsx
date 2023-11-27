import { FC } from 'react';

interface IContactProps {
    key: string,
    contactTitle:string, 
    contactValue:string
  }

const Contact: FC<IContactProps> = ({ contactTitle, contactValue}) => {
    return <div>
              <b>{contactTitle}: </b> 
              <span>{contactValue}</span>
          </div>
        }
        

export default Contact;