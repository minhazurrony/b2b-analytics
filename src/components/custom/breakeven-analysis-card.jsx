import { Card, CardContent } from "@/components/ui/card";

export const BreakevenAnalysisCard = ({ title, value, description }) => {
  return (
    <Card className="border border-dime-bright-pink rounded-sm h-full p-0">
      <CardContent className="p-6">
        <p className="text-sm font-medium text-dime-dark-grey uppercase leading-[175%]">
          {title}
        </p>
        <h3 className="text-[28px] font-normal text-dime-title-purple leading-[125%]">
          {value}
        </h3>
        {description && (
          <p className="text-sm font-light leading-[175%] text-dime-body-grey">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
