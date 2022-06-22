import { Selector,t } from "testcafe";

class HomePage{ 
    url="/";
    elements={
        mainBodyImage:Selector('section[class="main-banner"] div:nth-child(3)')
    }     
                 

    
    
}

export const homepage= new HomePage();