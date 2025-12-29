'use client';

import Image from 'next/image';
import { SPACING_DEFAULT_X, SPACING_DEFAULT_Y } from '@/shared/constants/spacing';
import { Box, Paper, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import {
  StyledTableCell,
  StyledTableRow,
  TableHeadRow,
} from '@/components/common/ProposalsSalesSection/WhyChooseProposalsSoftware/WhyChooseProposalsSoftware.styles';
import getTableData from '@/components/common/ProposalsSalesSection/WhyChooseProposalsSoftware/WhyChooseProposalsSoftware.helpers';

export default function WhyChooseProposalsSoftware() {
  const t = useTranslations('salesProposalsPage.whyChooseProposalsSoftware');

  const rows = getTableData(t);

  return (
    <Box
      position="relative"
      zIndex={1}
      component="section"
      pt={SPACING_DEFAULT_Y}
      sx={{ backgroundColor: 'grey.50' }}
      boxShadow="0 0 38px 0 rgba(0, 0, 0, 0.25)"
    >
      <Box maxWidth={1296} width="100%" mx="auto">
        <Typography
          variant="h3"
          component="h2"
          color="secondary.400"
          textAlign="center"
          fontWeight={500}
          px={SPACING_DEFAULT_X}
        >
          {t('title')}
        </Typography>
      </Box>
      <Box
        maxWidth="100%"
        pt={{ xs: 5, sm: 8 }}
        pb={{
          xs: SPACING_DEFAULT_Y.xs + 6.25,
          sm: SPACING_DEFAULT_Y.sm + 6.25,
          lg: SPACING_DEFAULT_Y.lg + 6.25,
          xl: SPACING_DEFAULT_Y.xl + 6.25,
        }}
        sx={{ overflowX: 'auto', overflowY: 'hidden' }}
      >
        <Box
          minWidth={{ xs: 744, sm: 900 }}
          maxWidth={1296}
          width="100%"
          mx="auto"
          px={SPACING_DEFAULT_X}
        >
          <TableContainer
            component={Paper}
            sx={{
              minWidth: { xs: 712, sm: 780 },
              maxWidth: { xs: 712, sm: '100%' },
              boxShadow: '0 -2px 38px 0 rgba(0, 0, 0, 0.15)',
              borderRadius: '16px',
              overflow: 'visible',
            }}
          >
            <Table>
              <TableHead>
                <TableHeadRow>
                  <StyledTableCell />
                  <StyledTableCell align="center" className="solargenix-logo">
                    <Image
                      src="/images/why-choose-our-solar-proposal-software/solargenix-32.png"
                      alt="Solargenix logo"
                      width={165.6}
                      height={32}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Image
                      src="/images/why-choose-our-solar-proposal-software/aurora-32.png"
                      alt="Aurora logo"
                      width={100}
                      height={32}
                      sizes="(max-width: 599.5px) 75px, 24px"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Image
                      src="/images/why-choose-our-solar-proposal-software/solargraf-32.png"
                      alt="SolarGraf logo"
                      width={122}
                      height={32}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Image
                      src="/images/why-choose-our-solar-proposal-software/solo-32.png"
                      alt="Solo logo"
                      width={63.2}
                      height={32}
                    />
                  </StyledTableCell>
                </TableHeadRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.solargenix}</StyledTableCell>
                    <StyledTableCell align="center">{row.aurora}</StyledTableCell>
                    <StyledTableCell align="center">{row.solargraf}</StyledTableCell>
                    <StyledTableCell align="center">{row.solo}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
