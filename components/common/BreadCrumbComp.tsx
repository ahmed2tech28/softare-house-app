"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Anchor from "next/link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Path {
  label: string;
  path: string;
}

interface Props {
  path: Path[];
  color?: string;
}

const BreadCrumbComp: React.FC<Props> = ({ path, color }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="→" aria-label="breadcrumb" sx={{ color }}>
        {path.map((item, i) => {
          if (i === path.length - 1) {
            return (
              <Typography key={i} style={{ color }}>
                {item.label}
              </Typography>
            );
          }
          return (
            <Link underline="hover" key={i} color="inherit" sx={{ color }}>
              <Anchor href={item.path}>{item.label}</Anchor>
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbComp;
