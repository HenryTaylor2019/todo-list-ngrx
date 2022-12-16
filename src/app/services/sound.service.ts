import { Injectable } from "@angular/core";
import { Howl } from "howler";
import { SoundEffects } from "../constants/sound-effects.enum";
import { HowlerFactoryService } from "./howler-factory.service";

@Injectable({
    providedIn: "root",
})
export class SoundService {
    private sounds: Map<SoundEffects, Howl>;

    constructor(private howlerFactoryService: HowlerFactoryService) {
        this.sounds = new Map<SoundEffects, Howl>();
    }

    public get(name: SoundEffects, volume: number): Howl {
        const sound = this.sounds.get(name);

        // If we already have the sound loaded then just set the volume and return it.
        if (sound) {
            sound.volume(volume);
            return sound;
        }

        const newSound = this.howlerFactoryService.createHowl({
            src: [`assets/sounds/${name}.mp3`],
            volume,
        });

        this.sounds.set(name, newSound);

        return newSound;
    }

    public play(name: SoundEffects, volume: number): Howl {
        const sound = this.get(name, volume);
        sound.play();

        return sound;
    }

    public stop(name: SoundEffects, volume: number): Howl {
      const sound = this.get(name, volume);
      sound.stop();

      return sound;
  }
}
