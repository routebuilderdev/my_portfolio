export interface MergeRequest {
  title: string;
  href: string;
}

export interface ContributionTheme {
  title: string;
  body: string;
  prs: MergeRequest[];
}

export interface OpenSourceContribution {
  project: string;
  role: string;
  period: string;
  summary: string;
  stats: { label: string; value: string }[];
  repos: { name: string; merged: string; href: string }[];
  themes: ContributionTheme[];
  practices: string[];
  profileUrl: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'DefiLlama',
    role: 'Open-source contributor — adapters and data tooling',
    period: 'September – November 2026',
    summary:
      'DefiLlama is the largest open aggregator of DeFi TVL and protocol data. Its adapters are the code that reads each protocol, chain and exchange on-chain, and hundreds of dashboards consume their output. I contributed 70 merged pull requests across its adapter and SDK repositories — mostly correctness work in a pipeline where a silent failure looks exactly like a quiet day.',
    stats: [
      { label: 'Merged PRs', value: '70' },
      { label: 'Repositories', value: '4' },
      { label: 'Period', value: 'Sep–Nov 2026' },
    ],
    repos: [
      {
        name: 'DefiLlama-Adapters',
        merged: '54 merged',
        href: 'https://github.com/DefiLlama/DefiLlama-Adapters',
      },
      {
        name: 'dimension-adapters',
        merged: '12 merged',
        href: 'https://github.com/DefiLlama/dimension-adapters',
      },
      {
        name: 'yield-server',
        merged: '2 merged',
        href: 'https://github.com/DefiLlama/yield-server',
      },
      {
        name: 'defillama-sdk',
        merged: '2 merged',
        href: 'https://github.com/DefiLlama/defillama-sdk',
      },
    ],
    themes: [
      {
        title: 'Fail loudly instead of under-reporting',
        body: 'The most expensive bug in a data pipeline is the one that returns a number. I removed silent catch handlers that swallowed vault and borrow-query failures, made failed account batches retry instead of being dropped, and skipped borrowed-balance maths when the liquidity read fails rather than counting it as zero.',
        prs: [
          {
            title: 'fix(valdora, eris-protocol): remove silent .catch() handlers that swallow vault/arb query failures',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21958',
          },
          {
            title: 'fix(arcadia-finance-v2): retry failed account batches instead of dropping them',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21878',
          },
          {
            title: 'accountable: skip borrowed calculation when liquidity read fails',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21822',
          },
        ],
      },
      {
        title: 'Proof-of-reserves coverage across chains',
        body: 'Exchange reserve adapters under-count when a chain or wallet set is missing, and the shortfall is invisible. I added missing chains and reserve legs for Binance, Bybit, Bitstamp, Bitget and OKX, including ADA (~$103M) and WLD on World Chain (~40M), and tracked Bitstamp’s attested XRPL wallets.',
        prs: [
          {
            title: 'Binance: add ADA reserves leg (~$103M)',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21642',
          },
          {
            title: 'Add missing Binance WLD reserves to binance-cex (World Chain, ~40M)',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21720',
          },
          {
            title: 'Track Bitget reserves on nine additional chains',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21785',
          },
          {
            title: 'Bitstamp: track attested XRPL wallets',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21717',
          },
        ],
      },
      {
        title: 'Adapter hygiene at scale',
        body: 'Thousands of adapters share a handful of helpers, so one bad default echoes everywhere. I applied a 30-second timeout to direct axios calls, removed dead endpoints that were quietly failing on every run, and enumerated factory strategies through their count accessor instead of assuming a fixed list.',
        prs: [
          {
            title: 'Apply default 30s timeout to direct axios calls in helpers',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21746',
          },
          {
            title: 'impermax: remove dead positions api endpoints',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21678',
          },
          {
            title: 'accountable: enumerate factory strategies via getStrategiesCount',
            href: 'https://github.com/DefiLlama/DefiLlama-Adapters/pull/21709',
          },
        ],
      },
    ],
    practices: [
      'Read the surrounding adapters before writing one — the conventions are the review criteria.',
      'Keep the diff to the cause. A correctness fix that also reformats the file is two reviews.',
      'Never fall through to a default value when a read fails; an error is data, a zero is a lie.',
      'State what changed and how it was checked in the PR body, so a maintainer can verify without asking.',
    ],
    profileUrl: 'https://github.com/routebuilderdev',
  },
];
