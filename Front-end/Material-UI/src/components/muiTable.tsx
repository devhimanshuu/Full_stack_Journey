import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
export const Muitable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td ,&:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableData = [
  {
    id: 1,
    first_name: "Ibby",
    last_name: "McKenney",
    email: "imckenney0@shareasale.com",
    gender: "Female",
    ip_address: "151.220.181.97",
  },
  {
    id: 2,
    first_name: "Wittie",
    last_name: "Priscott",
    email: "wpriscott1@instagram.com",
    gender: "Male",
    ip_address: "245.133.189.28",
  },
  {
    id: 3,
    first_name: "Harold",
    last_name: "Swinford",
    email: "hswinford2@taobao.com",
    gender: "Male",
    ip_address: "28.88.104.245",
  },
  {
    id: 4,
    first_name: "Timotheus",
    last_name: "Henkens",
    email: "thenkens3@businesswire.com",
    gender: "Male",
    ip_address: "55.249.100.121",
  },
  {
    id: 5,
    first_name: "Leilah",
    last_name: "Mc Trusty",
    email: "lmctrusty4@cloudflare.com",
    gender: "Female",
    ip_address: "81.186.112.40",
  },
  {
    id: 6,
    first_name: "Julie",
    last_name: "Tillot",
    email: "jtillot5@netvibes.com",
    gender: "Male",
    ip_address: "114.150.30.24",
  },
  {
    id: 7,
    first_name: "Emilie",
    last_name: "Pennuzzi",
    email: "epennuzzi6@simplemachines.org",
    gender: "Female",
    ip_address: "155.163.55.236",
  },
  {
    id: 8,
    first_name: "Vidovik",
    last_name: "Winterson",
    email: "vwinterson7@ask.com",
    gender: "Male",
    ip_address: "128.35.228.221",
  },
  {
    id: 9,
    first_name: "Ammamaria",
    last_name: "Grelak",
    email: "agrelak8@mit.edu",
    gender: "Female",
    ip_address: "153.144.40.254",
  },
  {
    id: 10,
    first_name: "Pip",
    last_name: "O'Criane",
    email: "pocriane9@netvibes.com",
    gender: "Male",
    ip_address: "28.37.210.142",
  },
];
