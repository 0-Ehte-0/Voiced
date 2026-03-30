import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { glass, pixelArt } from "@dicebear/collection"

export function useVoiceAvatar(seed: string) {
    return useMemo(() => {
        return createAvatar(pixelArt, {
            seed,
            size: 128
        }).toDataUri()
    }, [seed])
}