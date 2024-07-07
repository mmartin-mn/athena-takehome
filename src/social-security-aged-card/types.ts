type UserInfo = {
  address: string;
  current_retirement_savings: number;
  current_savings_rate: number;
  date_of_birth: string;
  full_name: string;
  household_income: number;
};

type Assumptions = {
  expected_rate_of_return: number;
  life_expectancy: number;
  pre_retirement_income_percent: number;
  retirement_age: number;
};

export type UserData = {
  user_info: UserInfo;
  assumptions: Assumptions;
};

export type Options = {
  value: UserData;
  label: string;
}[];
