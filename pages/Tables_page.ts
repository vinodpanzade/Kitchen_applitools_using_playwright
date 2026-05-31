import {Page,Locator} from "@playwright/test"


export class Tables_page{

    readonly page:Page;
    readonly Tabletext:Locator;
    //readonly table:Locator;
    readonly row:Locator;
    readonly row1:Locator;
    readonly coloumn:Locator;
  

constructor (page:Page){
    
      this.page=page;
      this.Tabletext=page.getByText("Table").nth(0);

    //   // this is table locator
    //   this.table=page.locator("#fruits-vegetables");
     // row locator
     this.row=page.locator("#fruits-vegetables tbody tr")
      // first row locator 
      this.row1=page.locator("#fruits-vegetables tbody tr").nth(0);

      //coloumn
      this.coloumn=page.locator("#fruits-vegetables thead tr th");

}

   async tablecheck(){

        await this.page.goto("https://kitchen.applitools.com/ingredients/table");
        const text=await this.Tabletext.textContent();
        console.log(text);
         // allTextContents is used to get all text from the rows
        //  const content= await this.row.locator("td").allTextContents();
        //  console.log(content);

        //  // from row 1 or particular row 
        //    const content1= await this.row1.locator("td").allTextContents();
        //  console.log(content1);

        // printing the row elem with for loop instead of the alltextcontents
        //   const size=await this.row1.locator("td").count();
        //   for(let i:number=0;i<size;i++){
        //       const text=await this.row1.locator("td").nth(i).textContent();
        //       console.log(text)
        //   }
        


        //  // particalar item   i.e frist element of 3rd row 
        //  const third1el=await this.row.nth(2).locator("td").nth(0).textContent();
        //  console.log(third1el)

        //print the count of col
        // const col=await this.coloumn.count();
        // console.log(col)

        // for(let i:number=0;i<col;i++){
        //     const coltext= await this.coloumn.nth(i).locator("button").textContent();
        //     console.log(coltext)
        // }


        // print the complete table row by row 
        // const texts=await this.row.locator("td").allTextContents();
        // console.log(texts)
        
        //using the for loop

        // const rowcount= await this.row.count();

        // for(let i:number=0;i<rowcount;i++){

        //     const colm= await this.row.nth(i).locator("td")
        //     const  colmcount= await colm.count()

        //     for(let j:number=0;j<colmcount;j++){

        //         const text= await colm.nth(j).textContent();
        //         console.log(`Row ${i+1} Col${j+1} = ${text}`);

        //     }

        // }


        //count the row and colm
        // const colmsize= await this.coloumn.count();
        // const rowsize= await this.row.count();

        // console.log(colmsize);
        // console.log(rowsize);

        //print only the first colm data
    //    const rowsize=await this.row.count();
    //    //const elemtext= await this.row.locator("td")

    //    for(let i:number=0;i<rowsize;i++){
    //        const elemtext= await this.row.nth(i).locator("td").nth(0).textContent();
    //        console.log(elemtext)
    //    }

      // print specific cell of the table
      // const textc= await this.row.nth(2).locator("td").nth(2).textContent()
      // console.log(textc)

      // //print the headeder or colm name 
      // const colmsize= await this.coloumn.count();

      // for(let i:number=0;i<colmsize;i++){
      //   const colmtext= await this.coloumn.nth(i).locator("button").textContent();
      //   console.log(colmtext)
      // }

      //find the tomato and print thaat specifi row also 

      const rowsize= await this.row.count();
      for(let i:number=0;i<rowsize;i++){
        const tdelm= await this.row.nth(i).locator("td")
        const tdsize= await tdelm.count();
       
        for(let j:number=0;j<tdsize;j++){
          const elfind= await tdelm.nth(j).textContent();
          if(elfind=="Banana"){
            // const allel=await tdelm.allTextContents();
            // console.log(allel)
            console.log("Banana in table yes")

          }
        }



      }
      
    
    



   }




}
