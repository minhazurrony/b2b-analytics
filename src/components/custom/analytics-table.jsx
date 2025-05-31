import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const AnalyticsTable = ({ columns, data, className = "" }) => {
  return (
    <div
      className={`rounded-sm px-4 py-2 border border-dime-outline-grey bg-white overflow-auto ${className}`}>
      <Table>
        <TableHeader className="border-b-dime-body-grey">
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className="text-dime-dark-grey text-sm font-medium uppercase">
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx} className="even:bg-muted/20">
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  className="font-light text-sm text-dime-dark-grey pt-5">
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
