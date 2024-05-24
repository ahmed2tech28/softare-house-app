"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

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
            <Link
              underline="hover"
              key={i}
              color="inherit"
              href={item.path}
              onClick={handleClick}
              sx={{ color }}
            >
              {item.label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbComp;
