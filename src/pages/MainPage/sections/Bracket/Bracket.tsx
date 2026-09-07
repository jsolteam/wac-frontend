// ПОЛНЫЙ КОД (вставь и замени)

import * as Styles from "./Bracket.styles.ts";
import {TitleSection} from "../../../../ui/TitleSection";
import {NAVIGATION_BRACKET} from "../../constants/navigation.ts";
import {
    BracketGrandFinal,
    BracketGroup,
    BracketGroupStage,
    BracketItem,
    BracketSemiFinal,
    BracketFinal
} from "../../../../components/Brackets";
import {BracketLoseSemiFinal} from "../../../../components/Brackets/BracketLoseSemiFinal";
import {useQuery} from "@tanstack/react-query";
import {getBrackets} from "../../../../services/brackets.service.ts";
import type {BracketItemResponse, BracketResponse} from "../../../../models/brackets.model.ts";
import {BracketLoseRound4} from "../../../../components/Brackets/BracketLoseRound4";
import {BracketLoseRound2} from "../../../../components/Brackets/BracketLoseRound2";

export const Bracket = () => {
    const {data: brackets} = useQuery({
        queryKey: ["brackets"],
        queryFn: getBrackets,
        refetchOnWindowFocus: false,
        staleTime: 5 * 1000 * 60,
    });

    const getLose = (match: BracketItemResponse, team: "home" | "away") => {
        if (team === "home") {
            return !match.home_winner && (match.home_winner || match.away_winner);
        }
        return !match.away_winner && (match.away_winner || match.home_winner);
    };

    const renderMatch = (match: BracketItemResponse, position: "right" | "left", double = false) => (
        <>
            <BracketItem
                title={match?.home_team?.name || "Неизвестно"}
                avatar={match?.home_team?.avatar || "https://static.jsol-team.ru/wac/unknown_team.png"}
                score={match?.home_score || 0}
                position={position}
                double={double}
                lose={getLose(match, "home")}
            />
            <BracketItem
                title={match?.away_team?.name || "Неизвестно"}
                avatar={match?.away_team?.avatar || "https://static.jsol-team.ru/wac/unknown_team.png"}
                score={match?.away_score || 0}
                position={position}
                double={double}
                lose={getLose(match, "away")}
            />
        </>
    );

    const displayTopStage = (stage: BracketItemResponse, rounds: BracketItemResponse[]) => (
        <BracketGroupStage
            top={<BracketGroup position="right">{renderMatch(rounds[0], "right")}</BracketGroup>}
            middle={<BracketGroup position="right">{renderMatch(stage, "right", true)}</BracketGroup>}
            bottom={<BracketGroup position="right">{renderMatch(rounds[1], "right")}</BracketGroup>}
        />
    );

    const displayTopSemiFinal = (semiFinal: BracketItemResponse[], round2: BracketItemResponse[], round1: BracketItemResponse[]) => (
        <BracketSemiFinal
            top={displayTopStage(round2[0], round1.slice(0, round1.length / 2))}
            middle={<BracketGroup position="right">{renderMatch(semiFinal[0], "right", true)}</BracketGroup>}
            bottom={displayTopStage(round2[1], round1.slice(round1.length / 2))}
        />
    );

    const displayTopBrackets = (brackets: BracketResponse) => {
        const semiFinals = brackets.rounds.find(val => val.stage === "C")?.rounds || [];
        const round2 = brackets.rounds.find(val => val.stage === "B")?.rounds || [];
        const round1 = brackets.rounds.find(val => val.stage === "A")?.rounds || [];

        const final = (
            <BracketFinal
                top={displayTopSemiFinal(semiFinals.slice(0, semiFinals.length / 2), round2.slice(0, round2.length / 2), round1.slice(0, round1.length / 2))}
                middle={<BracketGroup position="right">{renderMatch(brackets.final, "right", true)}</BracketGroup>}
                bottom={displayTopSemiFinal(semiFinals.slice(semiFinals.length / 2), round2.slice(round2.length / 2), round1.slice(round1.length / 2))}
            />
        );

        const grand_final = (
            <BracketGroup position="left">{renderMatch(brackets.grand_final, "left")}</BracketGroup>
        );

        return <BracketGrandFinal left={final} right={grand_final}/>;
    };

    const displayBottomRound2 = (round2: BracketItemResponse[], round1: BracketItemResponse[]) => (
        <BracketLoseRound2
            top={[
                <BracketGroup position="right">{renderMatch(round1[0], "right")}</BracketGroup>,
                <BracketGroup position="right" double>{renderMatch(round2[0], "right", true)}</BracketGroup>,
            ]}
            bottom={[
                <BracketGroup position="right">{renderMatch(round1[1], "right")}</BracketGroup>,
                <BracketGroup position="right" double>{renderMatch(round2[1], "right", true)}</BracketGroup>,
            ]}
        />
    );

    const displayBottomSemiFinal = (
        round4: BracketItemResponse[],
        round3: BracketItemResponse[],
        round2: BracketItemResponse[],
        round1: BracketItemResponse[]
    ) => {
        const topBlock = (
            <>
                <BracketGroup position="right">{renderMatch(round3[0], "right", true)}</BracketGroup>
                <BracketGroup position="right" double>{renderMatch(round4[0], "right", true)}</BracketGroup>
            </>
        );

        const bottomBlock = (
            <>
                <BracketGroup position="right">{renderMatch(round3[1], "right", true)}</BracketGroup>
                <BracketGroup position="right" double>{renderMatch(round4[1], "right", true)}</BracketGroup>
            </>
        );

        return (
            <BracketLoseRound4
                left={displayBottomRound2(round2.slice(0, round2.length / 2), round1.slice(0, round1.length / 2))}
                leftBlock={topBlock}
                right={displayBottomRound2(round2.slice(round2.length / 2), round1.slice(round1.length / 2))}
                rightBlock={bottomBlock}
            />
        );
    };

    const displayBottomBracket = (brackets: BracketResponse) => {
        const round4 = brackets.rounds.find(val => val.stage === "D")?.rounds || [];
        const round3 = brackets.rounds.find(val => val.stage === "C")?.rounds || [];
        const round2 = brackets.rounds.find(val => val.stage === "B")?.rounds || [];
        const round1 = brackets.rounds.find(val => val.stage === "A")?.rounds || [];

        const grand_final = (
            <BracketGroup position="left">{renderMatch(brackets.grand_final, "left")}</BracketGroup>
        );

        const final = (
            <BracketGroup position="right" double>{renderMatch(brackets.final, "right", true)}</BracketGroup>
        );

        return (
            <BracketGrandFinal
                left={<BracketLoseSemiFinal right={final}
                                            left={displayBottomSemiFinal(round4, round3, round2, round1)}/>}
                right={grand_final}
            />
        );
    };

    return (
        <Styles.Bracket id={NAVIGATION_BRACKET}>
            <Styles.Content>
                <TitleSection>Турнирная сетка</TitleSection>

                <Styles.BracketContent>
                    <Styles.BracketName>Верхняя сетка</Styles.BracketName>
                    <Styles.TopBracket>
                        <Styles.BracketStageBlock>
                            <Styles.BracketStageName>Раунд 1</Styles.BracketStageName>
                            <Styles.BracketStageName>Раунд 2</Styles.BracketStageName>
                            <Styles.BracketStageName>Полуфинал TB</Styles.BracketStageName>
                            <Styles.BracketStageName>Финал TB</Styles.BracketStageName>
                            <Styles.BracketStageName>Гранд-финал WAC</Styles.BracketStageName>
                        </Styles.BracketStageBlock>
                        {brackets && displayTopBrackets(brackets.winners)}
                    </Styles.TopBracket>
                </Styles.BracketContent>

                <Styles.BracketContent>
                    <Styles.BracketName>Нижняя сетка</Styles.BracketName>
                    <Styles.BracketStageBlock>
                        <Styles.BracketStageName>Раунд 1</Styles.BracketStageName>
                        <Styles.BracketStageName>Раунд 2</Styles.BracketStageName>
                        <Styles.BracketStageName>Раунд 3</Styles.BracketStageName>
                        <Styles.BracketStageName>Раунд 4</Styles.BracketStageName>
                        <Styles.BracketStageName>Полуфинал BB</Styles.BracketStageName>
                        <Styles.BracketStageName>Финал BB</Styles.BracketStageName>
                    </Styles.BracketStageBlock>
                    <Styles.BottomBracket>
                        {brackets && displayBottomBracket(brackets.losers)}
                    </Styles.BottomBracket>
                </Styles.BracketContent>
            </Styles.Content>
        </Styles.Bracket>
    );
};
