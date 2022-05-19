// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (number, arrayFunc) =>
{
  const object = 
  {
    specimenNum: number,
    dna: arrayFunc,
    mutate()
    {
      let b = returnRandBase();
      const dnaArray = this.dna;
      const randomBase = dnaArray[Math.floor(Math.random()*dnaArray.length)];
      for (let i = 0; i < dnaArray.length; i++)
      {
        if (dnaArray[i] === randomBase )
        {
           while (b === randomBase)
          {
            b = returnRandBase()
          };
          dnaArray.splice(i,1,b);
        }
      }
      return dnaArray;
    },
    compareDNA(pAequor2)
    {
      const specie1 = this.dna
      const specie2 = pAequor2.dna
      let sameIndex = 0
      let sameBase = 0
      for (let i = 0; i < specie1.length; i++)
      {
        for ( let j = 0; j < specie2.length; j++)
        {
          if (specie1[i] === specie2[j])
          {
            sameBase = sameBase + 1;
            if (i === j)
            {
              sameIndex = sameIndex + 1;
            }
          };
        };
      };
      const commonPercentage = (sameIndex/specie1.length)*100
      return `specimen ${this.specimenNum} and specimen ${pAequor2.specimenNum} have ${commonPercentage}% DNA in common`;
    },
    willLikelySurvive()
    {
      let countC = 0;
      let countG = 0;
      for (let i = 0; i < this.dna.length; i++)
      {
        if (this.dna[i] === 'C')
        {
          countC = countC + 1;
        };
        if (this.dna[i] === 'G')
        {
          countG = countG + 1;
        };
      }
        const percentageC = (countC/this.dna.length)*100;
        const percentageD = (countG/this.dna.length)*100;
        if (percentageC > 60 || percentageD > 60)
        {
          return true;
        }
        else
        {
          return false;
        };
    }
  }
  return object;
};
let i = 1;
let storeArray = [];
while (storeArray.length < 30)
{
  const store = pAequorFactory(i,mockUpStrand());
  if (store.willLikelySurvive() === true)
  {
    storeArray.push(store);
    i = i+1;
  }  
}


const p = pAequorFactory(1,mockUpStrand())
console.log(p);
console.log(p.mutate())
console.log(p.willLikelySurvive());
console.log(p.compareDNA(pAequorFactory(2,mockUpStrand())));
console.log(storeArray)








