# Critical literature review

## Selection and evidence quality

We selected ten scientific works relevant to dialogue summarisation, topic tagging and factual evaluation. Eight date from 2022–2025. DialogSum and QMSum from 2021 are retained for foundational dataset and source-span ideas. Nine entries are peer-reviewed publications. GPT-Calls is explicitly treated as a preprint. Product documentation is analysed separately. This is a focused engineering review, not a systematic or exhaustive literature search.

Queries covered dialogue summarisation, factual consistency, fine-grained evaluation and sales-call topic tagging. Primary publication pages, PDFs and official product documentation were checked on 19 October 2026. Inclusion required a concrete design or evaluation consequence. No benchmark score is transferred to the proposed CRM.

## L01 Chen et al. 2021

DialogSum: A Real-Life Scenario Dialogue Summarization Dataset. Findings of ACL. Peer reviewed; foundational.

Source: https://aclanthology.org/2021.findings-acl.449/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Labelled dialogue summaries and benchmark experiments expose discourse and coreference challenges. |
| Limit and transfer risk | English everyday dialogues differ from customer records and local business vocabulary. |
| Consequence for this project | Use public dialogues for a smoke benchmark, then evaluate a separate domain set. |

## L02 Zhong et al. 2021

QMSum: A New Benchmark for Query-based Multi-domain Meeting Summarization. NAACL. Peer reviewed; foundational.

Source: https://aclanthology.org/2021.naacl-main.472/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Locate-then-summarise connects requested information to relevant dialogue spans. |
| Limit and transfer risk | Long meetings and query-focused summaries do not directly represent short CRM interactions. |
| Consequence for this project | Retain source turn identifiers for every extracted fact and inspect evidence during review. |

## L03 Gao and Wan 2022

DialSummEval: Revisiting Summarization Evaluation for Dialogues. NAACL. Peer reviewed.

Source: https://aclanthology.org/2022.naacl-main.418/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Compares automatic metrics against human judgements on coherence, consistency, fluency and relevance. |
| Limit and transfer risk | Findings depend on the studied datasets and model outputs; one metric cannot establish business utility. |
| Consequence for this project | Combine human factuality and key-fact coverage with timing measurements, rather than relying on ROUGE alone. |

## L04 Wang et al. 2022

Analyzing and Evaluating Faithfulness in Dialogue Summarization. EMNLP. Peer reviewed.

Source: https://aclanthology.org/2022.emnlp-main.325/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Analyses factual errors and proposes FacEval with transformed multiple-choice questions. |
| Limit and transfer risk | The paper notes that rule-based transformations cover only designed error types. |
| Consequence for this project | Add speaker swaps, negation changes and unsupported commitments to the error test set. |

## L05 Laban et al. 2022

SummaC: Re-Visiting NLI-based Models for Inconsistency Detection in Summarization. TACL. Peer reviewed.

Source: https://aclanthology.org/2022.tacl-1.10/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Segments source and summary into smaller units and aggregates entailment signals. |
| Limit and transfer risk | An NLI score on summarisation benchmarks does not certify a CRM statement as true. |
| Consequence for this project | Consider consistency scoring as a secondary experiment, with human adjudication for the main outcome. |

## L06 Zhu et al. 2023

Annotating and Detecting Fine-grained Factual Errors for Dialogue Summarization. ACL. Peer reviewed.

Source: https://aclanthology.org/2023.acl-long.377/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | DIASUMFACT supplies fine-grained factual error annotations and compares error detectors. |
| Limit and transfer risk | The authors report limitations in practical error detection and evaluate their method on that dataset. |
| Consequence for this project | Use an explicit error taxonomy and retain reviewer decisions rather than automatically approving analyses. |

## L07 Malkiel et al. 2023

GPT-Calls: Enhancing Call Segmentation and Tagging by Generating Synthetic Conversations via Large Language Models. arXiv preprint. Preprint; lower evidence weight.

Source: https://arxiv.org/abs/2306.07941

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Uses topic anchors and synthetic conversations to support call segmentation and tagging. |
| Limit and transfer risk | Production and domain-specific evidence cannot be reproduced from our small prototype; synthetic data are not user validation. |
| Consequence for this project | Compare topic tagging against a keyword baseline. Label synthetic fixtures separately from field evidence. |

## L08 She et al. 2024

Exploring the Factual Consistency in Dialogue Comprehension of Large Language Models. NAACL. Peer reviewed.

Source: https://aclanthology.org/2024.naacl-long.338/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Evaluates dialogue summaries and factual question answering, including participant attribution errors. |
| Limit and transfer risk | Results concern the evaluated model versions and data; published error rates are not predictions for this project. |
| Consequence for this project | Test attribution, dates and next steps on held-out interactions. Record model and prompt versions. |

## L09 Song et al. 2024

FineSurE: Fine-grained Summarization Evaluation using LLMs. ACL. Peer reviewed.

Source: https://aclanthology.org/2024.acl-long.51/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Evaluates faithfulness, completeness and conciseness through fact checks and key-fact alignment. |
| Limit and transfer risk | The main benchmark is news, and LLM judging introduces domain and evaluator dependence. |
| Consequence for this project | Adopt key-fact coverage as a human rubric. Treat an automated judge as secondary and never as sole ground truth. |

## L10 Zhu et al. 2025

Factual Dialogue Summarization via Learning from Large Language Models. COLING. Peer reviewed.

Source: https://aclanthology.org/2025.coling-main.302/

| Aspect | Critical analysis |
| --- | --- |
| Approach and contribution | Distils generated positive and negative examples to improve smaller dialogue summarisation models. |
| Limit and transfer risk | Training requires data and compute; benchmark improvements do not prove multilingual CRM readiness. |
| Consequence for this project | Keep fine-tuning outside the mandatory MVP. Compare a pretrained model with the extractive baseline first. |

## Synthesis and design consequences

Dataset studies [L01, L02] inform source format and evidence links, but their domains do not establish CRM validity. Evaluation studies [L03, L09] support multiple quality dimensions. Factual-error studies [L04, L06, L08] motivate human inspection and targeted failure cases. Consistency scoring [L05] can support an experiment but cannot replace adjudication. Topic tagging [L07] motivates a separate tagging baseline. Distillation research [L10] informs future work; training remains outside the mandatory scope.

## Research gap and alternative explanations

The supported project question is whether an auditable, limited CRM workflow works for the recruited users under documented conditions. We have not established a new summarisation algorithm or a market gap. A configured existing CRM, improved note templates or a standalone summariser may solve the same problem more cheaply. Interviews and the workflow comparison must test these alternatives.

## Structured analysis matrix

| ID | Year | Evidence type | Project use |
| --- | --- | --- | --- |
| L01 | 2021 | Peer reviewed; foundational | Dataset and input design |
| L02 | 2021 | Peer reviewed; foundational | Evidence-linked UX |
| L03 | 2022 | Peer reviewed | Evaluation dimensions |
| L04 | 2022 | Peer reviewed | Adversarial test cases |
| L05 | 2022 | Peer reviewed | Optional consistency checker |
| L06 | 2023 | Peer reviewed | Review labels and error audit |
| L07 | 2023 | Preprint; lower evidence weight | Topic taxonomy and baselines |
| L08 | 2024 | Peer reviewed | Factuality and reproducibility |
| L09 | 2024 | Peer reviewed | Annotation rubric |
| L10 | 2025 | Peer reviewed | Model scope and feasibility |
