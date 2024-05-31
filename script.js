let person = {
    demographic: {
        age: 54,
        maritalStatus: undefined,
        childrenOrDependents: undefined,
        numberOfChildrenOrDependents: undefined,
        state: {
            name: undefined,
            taxRate: undefined,
        },
        county: {
                name: undefined,
                taxRate: undefined
        },
    },
    career: {
        name: undefined,
        employmentIncomeOther: undefined,
        employmentIncomePreTax: undefined,
        selfEmploymentIncome: undefined,
        totalIncome: undefined
    },
    retirment: {
        retirementAge: undefined,
        retirementExpensesPercentage: undefined,
        retirementExpenses: undefined
    },
    socialSecurity: {
            minimumRetirementAge: undefined,
            fullRetirementAge: undefined,
            maxDelayAge: undefined,
            ageToReceiveBenefits: undefined,
            maxIncome: undefined,
            w2Earnings: undefined,
            selfEmploymentEarnings: undefined,
    },
    medicare: {
            W2Earnings: undefined,
            SelfEmploymentEarnings: undefined
    },
    expenses: {
        rentalExpenseMonthly: undefined,
        homeValue: undefined,
        homeMortgage: undefined,
        homeMortgageLoanYears: undefined,
        homeMortgageYearsRemaining: undefined,
        homeMortgageRate: undefined,
        homeAppreciationRate: undefined,
    },
    investments: {
        investmentRateOfReturn: undefined,
        realEstateRateOfReturn: undefined,
        savingsRateOfReturn: undefined,
        hsa: {
            openingBalance: undefined,
            additionsPercentageOfIncome: undefined,
            maximumAsOf2024: undefined
        },
        person401k: {
            openingBalance: undefined,
            additionsPercentageOfIncome: undefined,
            maximumAsOf2024: undefined,
            annualLimitIncrease: undefined,
            retirementPreferredWithdrawalPercentage: undefined,
            penaltyFreeAgeOfWithdrawal: undefined,
            ageToWithdrawFundsForRetirement: undefined
        },
        rothIRA: {
            openingBalance: undefined,
            additionsPercentageOfIncome: undefined,
            ageForAdditionalContributions: undefined,
            maxContributionUnder50: undefined,
            maxContributionOver50: undefined,
            annualLimitIncrease: undefined,
            magiSingleFilerLimit: undefined,
            magiJointFilerLimit: undefined
        },
        taxableInvestmentAccount: {
            openingBalance: undefined
        },

        taxableSavingsAccount: {
            openingBalance: undefined
        }
        }
};
let stateTaxRate = {
    "Alabama": 2.00,
    "Alaska": null, // No state income tax
    "Arizona": 2.50,
    "Arkansas": 2.00,
    "California": 1.00,
    "Colorado": 4.40,
    "Connecticut": 2.00,
    "Delaware": 2.20,
    "Florida": null, // No state income tax
    "Georgia": 5.49,
    "Hawaii": 1.40,
    "Idaho": 5.80,
    "Illinois": 4.95,
    "Indiana": 3.05,
    "Iowa": 4.40,
    "Kansas": 3.10,
    "Kentucky": 4.00,
    "Louisiana": 1.85,
    "Maine": 5.80,
    "Maryland": 2.00,
    "Massachusetts": 5.00,
    "Michigan": 4.25,
    "Minnesota": 5.35,
    "Mississippi": 4.70,
    "Missouri": 2.00,
    "Montana": 4.70,
    "Nebraska": 2.46,
    "Nevada": null, // No state income tax
    "New Hampshire": 3.0, // On interest and dividends only
    "New Jersey": 1.40,
    "New Mexico": 1.70,
    "New York": 4.00,
    "North Carolina": 4.50,
    "North Dakota": 1.95,
    "Ohio": 2.750,
    "Oklahoma": 0.25,
    "Oregon": 4.75,
    "Pennsylvania": 3.07,
    "Rhode Island": 3.75,
    "South Carolina": 0.00,
    "South Dakota": null, // No state income tax
    "Tennessee": null, // No state income tax
    "Texas": null, // No state income tax
    "Utah": 4.65,
    "Vermont": 3.35,
    "Virginia": 2.00,
    "Washington": 7.0, // On capital gains income only
    "West Virginia": 2.36,
    "Wisconsin": 3.50,
    "Wyoming": null, // No state income tax
    "Washington, DC": 8.25
  };
let careerSalary = {
    bartender: 75000,
    contractor: 80000,
    electrician: 75000,
    engineer: 90000,
    executiveDirector: 105000,
    itArchitect: 120000,
    nurse: 83000,
    waiter: 55000,
    other: undefined
};
let requiredMinimumDistribution = [
    { age: 72, percentage: 27.4 },
    { age: 73, percentage: 26.5 },
    { age: 74, percentage: 25.5 },
    { age: 75, percentage: 24.6 },
    { age: 76, percentage: 23.7 },
    { age: 77, percentage: 22.9 },
    { age: 78, percentage: 22.0 },
    { age: 79, percentage: 21.1 },
    { age: 80, percentage: 20.2 },
    { age: 81, percentage: 19.4 },
    { age: 82, percentage: 18.5 },
    { age: 83, percentage: 17.7 },
    { age: 84, percentage: 16.8 },
    { age: 85, percentage: 16.0 },
    { age: 86, percentage: 15.2 },
    { age: 87, percentage: 14.4 },
    { age: 88, percentage: 13.7 },
    { age: 89, percentage: 12.9 },
    { age: 90, percentage: 12.2 },
    { age: 91, percentage: 11.5 },
    { age: 92, percentage: 10.8 },
    { age: 93, percentage: 10.1 },
    { age: 94, percentage: 9.5 },
    { age: 95, percentage: 8.9 },
    { age: 96, percentage: 8.4 },
    { age: 97, percentage: 7.8 },
    { age: 98, percentage: 7.3 },
    { age: 99, percentage: 6.8 },
    { age: 100, percentage: 6.4 },
    { age: 101, percentage: 6.0 },
    { age: 102, percentage: 5.6 },
    { age: 103, percentage: 5.2 },
    { age: 104, percentage: 4.9 },
    { age: 105, percentage: 4.6 },
    { age: 106, percentage: 4.3 },
    { age: 107, percentage: 4.1 },
    { age: 108, percentage: 3.9 },
    { age: 109, percentage: 3.7 },
    { age: 110, percentage: 3.5 },
    { age: 111, percentage: 3.4 },
    { age: 112, percentage: 3.3 },
    { age: 113, percentage: 3.1 },
    { age: 114, percentage: 3.0 },
    { age: 115, percentage: 2.9 },
    { age: 116, percentage: 2.8 },
    { age: 117, percentage: 2.7 },
    { age: 118, percentage: 2.5 },
    { age: 119, percentage: 2.3 },
    { age: '120 and over', percentage: 2.0 }
];

function assignValues(person) {

    // Demographic
    person.demographic = {
        age: 54,
        maritalStatus: "Married",
        childrenOrDependents: "Yes",
        numberOfChildrenOrDependents: 1,
        state: {
            name: "pennsylvania",
            taxRate: 3.07,
        },
        county: {
                name: "Allegheny",
                taxRate: 1.00
        },
    };

    // Career
    person.career = {
        name: "electrician",
        employmentIncomeOther: 110000,
        employmentIncomePreTax: 110000,
        selfEmploymentIncome: 25000,
        totalIncome: 135000
    };

    // Retirement
    person.retirement = {
        retirementAge: 65,
        retirementExpensesPercentage: 75,
        retirementExpenses: 101250
    };

    // Social Security
    person.socialSecurity = {
        minimumRetirementAge: 62,
        fullRetirementAge: 67,
        maxDelayAge: 70,
        ageToReceiveBenefits: 65,
        maxIncome: 168600,
        w2Earnings: 6.20,
        selfEmploymentEarnings: 12.40,
        medicareW2Earnings: 1.45,
        medicareSelfEmploymentEarnings: 2.90
    };

    // Expenses
    person.expenses = {
        rentalExpenseMonthly: 2500,
        homeValue: 350000,
        homeMortgage: -275000,
        homeMortgageLoanYears: 30,
        homeMortgageYearsRemaining: 27,
        homeMortgageRate: 3.50
    };

    // Investments
    person.investments = {
        investmentRateOfReturn: 8.00,
        realEstateRateOfReturn: 10.00,
        savingsRateOfReturn: 2.00,
        hsa: {
            openingBalance: 13500,
            additionsPercentageOfIncome: 20.00,
            maximumAsOf2024: 4150
        },
        person401k: {
            openingBalance: 40000,
            additionsPercentageOfIncome: 20.00,
            maximumAsOf2024: 23500,
            annualLimitIncrease: 2.65,
            retirementPreferredWithdrawalPercentage: 8.00,
            penaltyFreeAgeOfWithdrawal: 59.5,
            ageToWithdrawFundsForRetirement: 65
        },
        rothIRA: {
            openingBalance: 19000,
            additionsPercentageOfIncome: 20,
            ageForAdditionalContributions: 50,
            maxContributionUnder50: 7000,
            maxContributionOver50: 8000,
            annualLimitIncrease: 2.65,
            magiSingleFilerLimit: 146000,
            magiJointFilerLimit: 230000
        },
        taxableInvestmentAccount: {
            openingBalance: 77000
        },
        taxableSavingsAccount: {
            openingBalance: 11000
        }
    };

    return person;
}

let examplePerson = {};
person = assignValues(examplePerson);
console.log(examplePerson);
