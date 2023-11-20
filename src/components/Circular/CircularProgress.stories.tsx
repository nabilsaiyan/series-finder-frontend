import CircularProgress from "./CircularProgress";

export default {
  title: "CircularProgress",
  component: CircularProgress,
};

export const Primary = (args: any) => <CircularProgress {...args} />;
Primary.args = {
  percentage: 5.5,
};
