import { Box, Button, Typography } from '@mui/material';

import { ReactNode } from 'react';
import { green, red } from '@mui/material/colors';
import CheckmarkOutlined from '@/components/ui/icons/CheckmarkOutlined';
import CloseOutlined from '@/components/ui/icons/CloseOutlined';
import { useTranslations } from 'next-intl';

const rowKeys = [
  'proposalsInSeconds',
  'perProposalPricing',
  'instantAccess',
  'salesOptimizedInterface',
  'zeroLearningCurve',
  'unlimitedUsers',
  'unlimitedRevisions',
  'fullyAutomatedFlow',
  'utilityAutomation',
  'manualDesignEditing',
  'superiorSupport',
];

function getCell(value: ReactNode, content?: ReactNode) {
  let valueContent = value;
  if (value === true) {
    valueContent = (
      <Typography
        component="div"
        position="absolute"
        left="50%"
        right="50%"
        sx={{ transform: 'translate(-50%, -50%)', width: 32, height: 32 }}
        color={green[600]}
      >
        <CheckmarkOutlined />
      </Typography>
    );
  }

  if (value === false) {
    valueContent = (
      <Typography
        component="span"
        position="absolute"
        left="50%"
        right="50%"
        sx={{ transform: 'translate(-50%, -50%)', width: 32, height: 32 }}
        color={red[600]}
      >
        <CloseOutlined />
      </Typography>
    );
  }

  return (
    <>
      {valueContent}
      {content}
    </>
  );
}

export default function getTableData(t: ReturnType<typeof useTranslations>) {
  const data: Record<string, Record<string, ReactNode>> = {
    solargenix: {
      proposalsInSeconds: true,
      perProposalPricing: (
        <Typography variant="subtitle2" component="div" fontWeight={500}>
          $1.5 - $2 <br />({t('planSpecific')})
        </Typography>
      ),

      instantAccess: true,
      salesOptimizedInterface: true,
      zeroLearningCurve: true,
      unlimitedUsers: true,
      unlimitedRevisions: true,
      fullyAutomatedFlow: true,
      utilityAutomation: true,
      manualDesignEditing: true,
      superiorSupport: true,
    },
    aurora: {
      proposalsInSeconds: false,
      perProposalPricing: (
        <Typography variant="body1" component="div" fontWeight={500}>
          ~$16
        </Typography>
      ),
      instantAccess: false,
      salesOptimizedInterface: false,
      zeroLearningCurve: false,
      unlimitedUsers: false,
      unlimitedRevisions: false,
      fullyAutomatedFlow: false,
      utilityAutomation: (
        <Typography variant="body1" component="span" fontWeight={500}>
          {t('partial')}
        </Typography>
      ),
      manualDesignEditing: true,
      superiorSupport: false,
    },
    solargraf: {
      proposalsInSeconds: false,
      perProposalPricing: (
        <Typography variant="body1" component="div" fontWeight={500}>
          $12
        </Typography>
      ),
      instantAccess: false,
      salesOptimizedInterface: false,
      zeroLearningCurve: false,
      unlimitedUsers: false,
      unlimitedRevisions: false,
      fullyAutomatedFlow: false,
      utilityAutomation: (
        <Typography variant="body1" component="span" fontWeight={500}>
          {t('partial')}
        </Typography>
      ),
      manualDesignEditing: true,
      superiorSupport: false,
    },
    solo: {
      proposalsInSeconds: false,
      perProposalPricing: (
        <Typography variant="body1" component="div" fontWeight={500}>
          $29 – $32 <br />({t('planSpecific')})
        </Typography>
      ),
      instantAccess: false,
      salesOptimizedInterface: false,
      zeroLearningCurve: false,
      unlimitedUsers: true,
      unlimitedRevisions: false,
      fullyAutomatedFlow: false,
      utilityAutomation: false,
      manualDesignEditing: false,
      superiorSupport: false,
    },
  };

  return rowKeys.map(key => ({
    id: key,
    name: t.rich(key, {
      bold: chunks => (
        <Typography variant="inherit" component="strong" fontWeight={700}>
          {chunks}
        </Typography>
      ),
    }),
    solargenix: getCell(
      data.solargenix[key],
      key === 'superiorSupport' ? (
        <Box
          position="absolute"
          width="100%"
          top="100%"
          p={1}
          left={0}
          sx={{ backgroundColor: 'tertiary.50' }}
          border="2px solid"
          borderColor="tertiary.400"
          borderTop="none"
          borderRadius="0 0 8px 8px"
          boxShadow="0 30px 38px -5px rgba(0, 0, 0, 0.25)"
        >
          <Button variant="contained" color="secondary" fullWidth size="small">
            {t('startNow')}
          </Button>
        </Box>
      ) : null
    ),
    aurora: getCell(data.aurora[key]),
    solargraf: getCell(data.solargraf[key]),
    solo: getCell(data.solo[key]),
  }));
}
