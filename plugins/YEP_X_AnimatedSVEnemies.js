//=============================================================================
// Yanfly Engine Plugins - Battle Engine Extension - Animated Sideview Enemies
// YEP_X_AnimatedSVEnemies.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_AnimatedSVEnemies = true;

var Yanfly = Yanfly || {};
Yanfly.SVE = Yanfly.SVE || {};

//=============================================================================
 /*:
 * @plugindesc v1.04 (Requires YEP_BattleEngineCore.js) This plugin lets
 * you use Animated Sideview Actors for enemies!
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Anchor X
 * @desc Sets the default anchor position of the sprite.
 * Default: 0.5
 * @default 0.5
 *
 * @param Anchor Y
 * @desc Sets the default anchor position of the sprite.
 * Default: 1
 * @default 1
 *
 * @param Sprite Smoothing
 * @desc Enable Sprite Smoothing? This is a global setting.
 * NO - false     YES - true
 * @default true
 *
 * @param Sprite Width
 * @desc Sets the minimum width for sideview sprites.
 * Use 'auto' for automatic detection. Default: auto
 * @default auto
 *
 * @param Sprite Height
 * @desc Sets the minimum height for sideview sprites.
 * Use 'auto' for automatic detection. Default: auto
 * @default auto
 *
 * @param Collapse
 * @desc When a sprite dies, have it collapse and vanish?
 * NO - false     YES - true
 * @default false
 *
 * @param Frame Speed
 * @desc The default frame speed used in between motions.
 * Default: 12
 * @default 12
 *
 * @param ---Shadows---
 * @default
 *
 * @param Show Shadow
 * @desc Show shadows on sideview enemies?
 * NO - false     YES - true
 * @default false
 *
 * @param Shadow Scale X
 * @desc Sets the default horizontal shadow scale.
 * Use 'auto' for automatic detection. Default: auto
 * @default auto
 *
 * @param Shadow Scale Y
 * @desc Sets the default vertical shadow scale.
 * Use 'auto' for automatic detection. Default: auto
 * @default auto
 *
 * @param ---Breathing---
 * @default
 *
 * @param Enable Breathing
 * @desc Breathing option for enemies.
 * 0 - None, 1 - Static, 2 - Sideview, 3 - Both
 * @default 1
 *
 * @param Breathing Speed
 * @desc The default breathing rate for enemies.
 * Lower - Faster     Larger - Slower
 * @default 20
 *
 * @param Breathing X Rate
 * @desc The default breathing X rate for enemies.
 * Lower - Static     Larger - Dynamic
 * @default 0.001
 *
 * @param Breathing Y Rate
 * @desc The default breathing Y rate for enemies.
 * Lower - Static     Larger - Dynamic
 * @default 0.02
 *
 * @param HP Link Breathing
 * @desc Link breathing rate to HP Rate?
 * NO - false     YES - true
 * @default false
 *
 * @param ---Floating---
 * @default
 *
 * @param Floating Speed
 * @desc The default floating speed for enemies.
 * Lower - Faster     Larger - Slower
 * @default 20
 *
 * @param Floating Rate
 * @desc The default floating rate for enemies.
 * Lower - Faster     Larger - Slower
 * @default 0.3
 *
 * @param Floating Height
 * @desc The default minimum floating height for enemies.
 * Lower - Closer to Ground     Larger - Higher Up
 * @default 50
 *
 * @param ---Motions---
 * @default
 *
 * @param Attack Motion
 * @desc Sets the default attack motion for no weapons.
 * Attack Motion Types: swing     thrust     missile
 * @default thrust
 *
 * @param Weapon Image Index
 * @desc Sets the default weapon image index for the sprite.
 * Use 0 for no image.
 * @default 0
 *
 * @param Idle Motion
 * @desc Sets the sprite's idle motion.
 * Default: walk
 * @default walk
 *
 * @param Damage Motion
 * @desc Sets the sprite's taking damage motion.
 * Default: damage
 * @default damage
 *
 * @param Evade Motion
 * @desc Sets the sprite's evasion motion.
 * Default: evade
 * @default evade
 *
 * @param Escape Motion
 * @desc Sets the sprite's escape motion.
 * Default: escape
 * @default escape
 *
 * @param Guard Motion
 * @desc Sets the sprite's guard motion.
 * Default: guard
 * @default guard
 *
 * @param Abnormal Motion
 * @desc Sets the sprite's abnormal (status afflicted) motion.
 * Default: abnormal
 * @default abnormal
 *
 * @param Sleep Motion
 * @desc Sets the sprite's sleeping motion.
 * Default: sleep
 * @default sleep
 *
 * @param Dying Motion
 * @desc Sets the sprite's dying (crisis) motion.
 * Default: dying
 * @default dying
 *
 * @param Dead Motion
 * @desc Sets the sprite's dead motion.
 * Default: dead
 * @default dead
 *
 * @param ---Weapons---
 * @default
 *
 * @param Weapon Image Index
 * @desc Sets the default weapon image index for the sprite.
 * Use 0 for no image.
 * @default 0
 *
 * @param Weapon 1 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 1: Dagger     Motion: swing
 * @default swing
 *
 * @param Weapon 1 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 6
 *
 * @param Weapon 2 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 2: Sword     Motion: swing
 * @default swing
 *
 * @param Weapon 2 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 6
 *
 * @param Weapon 3 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 3: Flail     Motion: swing
 * @default swing
 *
 * @param Weapon 3 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 4 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 4: Axe     Motion: swing
 * @default swing
 *
 * @param Weapon 4 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 6
 *
 * @param Weapon 5 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 5: Whip     Motion: swing
 * @default swing
 *
 * @param Weapon 5 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 6
 *
 * @param Weapon 6 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 6: Staff     Motion: swing
 * @default swing
 *
 * @param Weapon 6 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 7 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 7: Long Bow     Motion: missile
 * @default missile
 *
 * @param Weapon 7 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 11
 *
 * @param Weapon 8 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 8: Crossbow     Motion: missile
 * @default missile
 *
 * @param Weapon 8 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 11
 *
 * @param Weapon 9 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 9: Gun     Motion: missile
 * @default missile
 *
 * @param Weapon 9 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 111
 *
 * @param Weapon 10 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 10: Claw     Motion: thrust
 * @default thrust
 *
 * @param Weapon 10 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 16
 *
 * @param Weapon 11 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 11: Glove     Motion: thrust
 * @default thrust
 *
 * @param Weapon 11 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 12 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 12: Spear     Motion: thrust
 * @default thrust
 *
 * @param Weapon 12 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 11
 *
 * @param Weapon 13 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 13: Mace     Motion: swing
 * @default swing
 *
 * @param Weapon 13 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 14 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 14: Rod     Motion: swing
 * @default swing
 *
 * @param Weapon 14 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 15 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 15: Club     Motion: swing
 * @default swing
 *
 * @param Weapon 15 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 16 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 16: Chain     Motion: swing
 * @default swing
 *
 * @param Weapon 16 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 6
 *
 * @param Weapon 17 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 17: Sword#2     Motion: swing
 * @default swing
 *
 * @param Weapon 17 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 7
 *
 * @param Weapon 18 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 18: Iron Pipe     Motion: swing
 * @default swing
 *
 * @param Weapon 18 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 19 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 19: Sling Shot     Motion: missile
 * @default missile
 *
 * @param Weapon 19 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 11
 *
 * @param Weapon 20 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 20: Shotgun     Motion: missile
 * @default missile
 *
 * @param Weapon 20 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 111
 *
 * @param Weapon 21 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 21: Rifle     Motion: missile
 * @default missile
 *
 * @param Weapon 21 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 111
 *
 * @param Weapon 22 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 22: Chainsaw     Motion: thrust
 * @default thrust
 *
 * @param Weapon 22 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 7
 *
 * @param Weapon 23 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 23: Railgun     Motion: missile
 * @default missile
 *
 * @param Weapon 23 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 15
 *
 * @param Weapon 24 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 24: Stun Rod     Motion: thrust
 * @default thrust
 *
 * @param Weapon 24 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 15
 *
 * @param Weapon 25 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 25: Spell Book   Motion: swing
 * @default swing
 *
 * @param Weapon 25 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 26 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 26: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 26 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 27 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 27: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 27 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 28 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 28: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 28 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 29 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 29: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 29 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @param Weapon 30 Motion
 * @desc Motion used by default for this weapon image.
 * Weapon 30: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 30 Animation
 * @desc Battle animation used by default for this weapon image.
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_BattleEngineCore.
 * Make sure this plugin is located under YEP_BattleEngineCore in the
 * plugin list.
 *
 * This extension plugin allows you to animate enemies in a number of ways,
 * from giving static enemies breathing, floating, and scaled attributes to
 * utilizing animated sideview actors as potential battlers for your enemies
 * instead of static graphics to help make your enemies appear more lively!
 *
 * If you are using YEP_X_ActSeqPack2, and would like the ability to add in
 * floating enemies, place this plugin under YEP_X_ActSeqPack2 as well.
 *
 * To use this plugin, insert within the enemy's notebox the notetags you see
 * in the section below:
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert these notetags into the enemy noteboxes below to change their
 * sidewview battler aspects.
 *
 * Enemy Notetags:
 *
 *   --- General ---
 *
 *   <Breathing>
 *   <No Breathing>
 *   Enables or disables a 'breathing' effect for the enemy sprite.
 *
 *   <Breathing Speed: x>
 *   How many frames does it take to make a full breathing cycle? The lower the
 *   x value, the faster the enemy breathes. The higher the x value, the slower
 *   the enemy breathes.
 *
 *   <Breathing Rate X: x.y>
 *   <Breathing Rate Y: x.y>
 *   Sets the horizontal and vertical breathing rate to x.y. 1.0 is a 100%
 *   variance change while 0.0 is a 0% variance.
 *
 *   <Enable HP Link Breathing>
 *   <Disable HP Link Breathing>
 *   Will enable/disable HP Link Breathing. The lower the HP on the enemy, the
 *   slower the enemy will breathe.
 *
 *   <Floating>
 *   Sets the enemy to be animated as if it was floating.
 *
 *   <Floating Speed: x>
 *   How many frames does it take to do a full floating cycle? The lower the x
 *   value, the faster the enemy floats. The higher the x value, the slower the
 *   enemy floats.
 *
 *   <Floating Rate: x.y>
 *   Sets the floating rate for the enemy to x.y. 1.0 is a 100% variance change
 *   while 0.0 is a 0% variance change.
 *
 *   <Floating Height: x>
 *   Sets the minimum float height for the enemy to x.
 *
 *   <Scale Sprite: x%>
 *   This allows you to scale the sprite larger or smaller by x% of the
 *   original sprite size. If you wish to only scale either the width or the
 *   height, use the notetags below:
 *
 *   <Scale Sprite Width: x%>
 *   <Scale Sprite Height: x%>
 *   This will scale the sprite's width or height by x% amount specifically
 *   rather than the whole sprite itself by the same ratio.
 *
 *   --- Sideview ---
 *
 *   <Sideview Battler: filename>
 *   This is the filename used for the sideview battler found within your
 *   project's img/sv_actors/ folder. Doing this will enable the following
 *   notetags to be applied to the battler. This is case-sensitive and used
 *   without the image's file extension.
 *
 *   *Example: SF_Actor3_8.png would be <Sideview Battler: SF_Actor3_8>
 *
 *   *Note: If more than one of these tags is used, the sideview battler
 *   selected will be picked from a random pool. Their settings, however, will
 *   match all of the other sideview settings set in the notetags for the sake
 *   of simplicity.
 *
 *   --- Sideview Specific ---
 *
 *   <Sideview Anchor X: y.z>
 *   <Sideview Anchor Y: y.z>
 *   This sets the anchor location for the enemy's sideview battler at y.z.
 *   This is used for the event you have an odd-proportioned sideview battler.
 *
 *   <Sideview Width: x>
 *   <Sideview Height: x>
 *   Sets the width/height of the sideview battler. This is for the event
 *   you're using a battler image that may have different proportions than
 *   normal sideview battlers.
 *
 *   <Sideview Collapse>
 *   Sets it so that the enemy when it dies will collapse and vanish.
 *
 *   <Sideview No Collapse>
 *   Sets it so that the enemy when it dies will leave behind a corpse and
 *   will not vanish.
 *
 *   <Sideview Frame Speed: x>
 *   Sets the frame speed of this sideview battler to x. The lower the x value,
 *   the faster the sideview battler animates. The higher it is, the slower the
 *   battler animates.
 *
 *   --- Motions ---
 *
 *   <Sideview Attack Motion: swing>
 *   <Sideview Attack Motion: thrust>
 *   <Sideview Attack Motion: missile>
 *   Sets the basic attack motion for your sideview enemy if the sideview
 *   enemy is not using any weapons. You can use any of the following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Weapon: x>
 *   This sets the sprite's weapon image to x. If you haven't modified your
 *   system images of the weapons, they would be as follows:
 *
 *   0 - Nothing
 *   1 - Dagger   7 - Long Bow  13 - Mace       19 - Slingshot  25 - Book
 *   2 - Sword    8 - Crossbow  14 - Rod        20 - Shotgun    26 - Custom
 *   3 - Flail    9 - Gun       15 - Club       21 - Rifle      27 - Custom
 *   4 - Axe     10 - Claw      16 - Chain      22 - Chainsaw   28 - Custom
 *   5 - Whip    11 - Glove     17 - Sword#2    23 - Railgun    29 - Custom
 *   6 - Staff   12 - Spear     18 - Iron Pipe  24 - Stun Rod   30 - Custom
 *
 *   * Note: Inserting multiple of these notetags will put them inside a random
 *   pool of weapons to use. Keep in mind if you use this notetag, it will use
 *   all the default settings found in the plugin's parameters. If you wish to
 *   use more unique settings, use the notetag below:
 *
 *   <Sideview Weapon: x, y, z>
 *   This sets the sprite's weapon image to x, motion to y, and attack
 *   animation to z. An example of how this notetag would be used would be
 *   as such:
 *   
 *      <Sideview Weapon: 2, swing, 6>
 *
 *   This will give the battler a sword with the swing motion and playing
 *   battle animation 6 when attacking.
 *
 *   <Sideview Idle Motion: x>
 *   Sets the idling motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *   * Note: Inserting multiple of these notetags will put them inside a random
 *   pool of motions to use.
 *
 *   <Sideview Damage Motion: x>
 *   Sets the damaged motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Evade Motion: x>
 *   Sets the evasion motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Escape Motion: x>
 *   Sets the escaping motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Guard Motion: x>
 *   Sets the guard motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Abnormal Motion: x>
 *   Sets the abnormal motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Sleep Motion: x>
 *   Sets the sleep motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Dying Motion: x>
 *   Sets the dying (crisis) motion for your sideview enemy. You can use any
 *   of the following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Dead Motion: x>
 *   Sets the dead motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   --- Shadows ---
 *
 *   <Sideview Show Shadow>
 *   Sets it so the enemy will show its shadow for its sideview sprite. The
 *   default setting of this is tied to Battle Engine Core's 'Show Shadows'.
 *
 *   <Sideview Hide Shadow>
 *   Sets it so the enemy will hide its shadow for its sideview sprite. The
 *   default setting of this is tied to Battle Engine Core's 'Show Shadows'.
 *
 *   <Sideview Shadow Width: x%>
 *   Sets the shadow width to x% larger/smaller than the default shadow size
 *   found within the img/system folder.
 *
 *   <Sideview Shadow Height: x%>
 *   Sets the shadow height to x% larger/smaller than the default shadow size
 *   found within the img/system folder.
 *
 * State Notetags:
 *
 *   <Hide Sideview Weapon>
 *   This will cause the animated sideview enemy battler to hide its sideview
 *   weapon effect. The attack motion will revert back to the barehanded attack
 *   motion set for the enemy and the attack animation will be the enemy's
 *   default attack animation.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Fixed a bug with Sprite Smoothing disabled on Shadows.
 * - Fixed a bug with the anchor Y positions being overwritten.
 *
 * Version 1.03:
 * - Fixed a bug that would cause <Sideview Width: x> & <Sideview Height: x>
 * notetags to crash the game.
 *
 * Version 1.02:
 * - Synchronized state icons and overlays with floating enemies.
 *
 * Version 1.01:
 * - Added 'HP Link Breathing' plugin parameter. If enabled, the lower the HP,
 * the slower the enemy breathes.
 * - Added <Enable HP Link Breathing> and <Disable HP Link Breathing> notetags.
 *
 * Version 1.00:
 * - Finished plugin! Hooray!
 */
 /*:ja
 * @plugindesc v1.04 モーション付のサイドビューアクターを、敵にも用いることができます(使用にはYEP_BattleEngineCore.jsが必要です)
 * @author Yanfly Engine Plugins
 *
 * @param ---一般---
 * @default
 *
 * @param Anchor X
 * @desc スプライトのデフォルトアンカー位置を設定します。(X)
 * デフォルト値: 0.5
 * @default 0.5
 *
 * @param Anchor Y
 * @desc スプライトのデフォルトアンカー位置を設定します。(Y)
 * デフォルト値: 1
 * @default 1
 *
 * @param Sprite Smoothing
 * @desc スプライトスムージングをオンにします。(グローバルセッティング)
 * オフ - false     オン - true
 * @default true
 *
 * @param Sprite Width
 * @desc サイドビュースプライトの、最小幅を設定します。
 * 'auto'を入力すると自動で決定します。デフォルト: auto
 * @default auto
 *
 * @param Sprite Height
 * @desc サイドビュースプライトの、高さの最小値を設定します。
 * 'auto'を入力すると自動で決定します。デフォルト: auto
 * @default auto
 *
 * @param Collapse
 * @desc スプライトが死亡した際、消滅させますか？
 * いいえ - false     はい - true
 * @default false
 *
 * @param Frame Speed
 * @desc モーション間で用いられる、デフォルトのフレームスピードを設定します。
 * デフォルト: 12
 * @default 12
 *
 * @param ---影---
 * @default
 *
 * @param Show Shadow
 * @desc サイドビューの敵に影を付けますか？
 * いいえ - false     はい - true
 * @default false
 *
 * @param Shadow Scale X
 * @desc 影の、デフォルトの水平方向(X)の大きさを設定します。
 * 'auto'を用いると自動で決定します。デフォルト: auto
 * @default auto
 *
 * @param Shadow Scale Y
 * @desc 影の、デフォルトの垂直方向(Y)の大きさを設定します。
 * 'auto'を用いると自動で決定します。デフォルト: auto
 * @default auto
 *
 * @param ---呼吸---
 * @default
 *
 * @param Enable Breathing
 * @desc 敵の呼吸オプションを設定します。
 * 0 - 無し, 1 - 静止時, 2 - サイドビュー, 3 - 両方
 * @default 1
 *
 * @param Breathing Speed
 * @desc 敵の呼吸のスピードを設定します。
 * 低い値ほど速く、高い値ほど遅く呼吸します。
 * @default 20
 *
 * @param Breathing X Rate
 * @desc 呼吸時の X軸 方向の収縮率を指定します。
 * 低い値ほど穏やかに、高い値ほど激しく収縮します。
 * @default 0.001
 *
 * @param Breathing Y Rate
 * @desc 呼吸時の Y軸 方向の収縮率を指定します。
 * 低い値ほど穏やかに、高い値ほど激しく収縮します。
 * @default 0.02
 *
 * @param HP Link Breathing
 * @desc 呼吸速度をHPのレートとリンクさせますか？
 * いいえ - false     はい - true
 * @default false
 *
 * @param ---浮遊---
 * @default
 *
 * @param Floating Speed
 * @desc 敵のデフォルトの浮遊スピードを設定します。
 * 低い値ほど速く、高い値ほど遅く呼吸します。
 * @default 20
 *
 * @param Floating Rate
 * @desc 敵のデフォルトの浮遊レートを設定します。
 * 低い値ほど頻繁に、高い値ほどゆっくりと浮遊します。
 * @default 0.3
 *
 * @param Floating Height
 * @desc デフォルトの浮遊の最低値を設定します。
 * 低く設定するほど地面に近く、高く設定すると高く浮遊します。
 * @default 50
 *
 * @param ---モーション---
 * @default
 *
 * @param Attack Motion
 * @desc 武器無しの時のデフォルト攻撃モーションを設定します。
 * 攻撃モーション: 振り     突き     飛び道具
 * @default thrust
 *
 * @param Weapon Image Index
 * @desc スプライトにデフォルトの武器の画像インデックスを設定します。
 * 0を入れると画像は使用されません。
 * @default 0
 *
 * @param Idle Motion
 * @desc スプライトに何もしていない時のモーションを設定します。
 * デフォルト: 歩行
 * @default walk
 *
 * @param Damage Motion
 * @desc スプライトにダメージ時のモーションを設定します。
 * デフォルト: ダメージ
 * @default damage
 *
 * @param Evade Motion
 * @desc Sets スプライトに回避時のモーションを設定します。
 * デフォルト: 回避
 * @default evade
 *
 * @param Escape Motion
 * @desc スプライトに逃避時のモーションを設定します。
 * デフォルト: 逃げる
 * @default escape
 *
 * @param Guard Motion
 * @desc スプライトにガード時のモーションを設定します。
 * デフォルト: 防御
 * @default guard
 *
 * @param Abnormal Motion
 * @desc スプライトに状態異常時のモーションを設定します。
 * デフォルト: 状態異常
 * @default abnormal
 *
 * @param Sleep Motion
 * @desc スプライトに睡眠時のモーションを設定します。
 * デフォルト: 睡眠
 * @default sleep
 *
 * @param Dying Motion
 * @desc スプライトに瀕死時のモーションを設定します。
 * デフォルト: 瀕死
 * @default dying
 *
 * @param Dead Motion
 * @desc スプライトに死亡時のモーションを設定します。
 * デフォルト: 戦闘不能
 * @default dead
 *
 * @param ---武器---
 * @default
 *
 * @param Weapon Image Index
 * @desc スプライトにデフォルトの武器の画像インデックスを設定します。
 * 0を入れると画像は使用されません。
 * @default 0
 *
 * @param Weapon 1 Motion
 * @desc この武器1にデフォルトで使われるモーションを設定します。
 * 武器1: ダガー     モーション: 振り
 * @default swing
 *
 * @param Weapon 1 Animation
 * @desc この武器1にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 6
 *
 * @param Weapon 2 Motion
 * @desc この武器2にデフォルトで使われるモーションを設定します。
 * 武器2: 剣     モーション: 振り
 * @default swing
 *
 * @param Weapon 2 Animation
 * @desc この武器2にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 6
 *
 * @param Weapon 3 Motion
 * @desc この武器3にデフォルトで使われるモーションを設定します。
 * 武器3: フレイル     モーション: 振り
 * @default swing
 *
 * @param Weapon 3 Animation
 * @desc この武器3にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 4 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器4: 斧     モーション: 振り
 * @default swing
 *
 * @param Weapon 4 Animation
 * @desc この武器4にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 6
 *
 * @param Weapon 5 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器5: 鞭     モーション: 振り
 * @default swing
 *
 * @param Weapon 5 Animation
 * @desc この武器5にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 6
 *
 * @param Weapon 6 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器6: 杖     モーション: 振り
 * @default swing
 *
 * @param Weapon 6 Animation
 * @desc この武器6にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 7 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器7: ロングボウ(弓)     モーション: 飛び道具
 * @default missile
 *
 * @param Weapon 7 Animation
 * @desc この武器7にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 11
 *
 * @param Weapon 8 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器8: クロスボウ     モーション: 飛び道具
 * @default missile
 *
 * @param Weapon 8 Animation
 * @desc この武器8にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 11
 *
 * @param Weapon 9 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器9: 銃     モーション: 飛び道具
 * @default missile
 *
 * @param Weapon 9 Animation
 * @desc この武器9にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 111
 *
 * @param Weapon 10 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器10: クロウ(爪)     モーション: 突き
 * @default thrust
 *
 * @param Weapon 10 Animation
 * @desc この武器10にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 16
 *
 * @param Weapon 11 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器11: グローブ     モーション: 突き
 * @default thrust
 *
 * @param Weapon 11 Animation
 * @desc この武器11にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 12 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器12: 棘     モーション: 突き
 * @default thrust
 *
 * @param Weapon 12 Animation
 * @desc この武器12にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 11
 *
 * @param Weapon 13 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器13: メイス     モーション: 振り
 * @default swing
 *
 * @param Weapon 13 Animation
 * @desc この武器13にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 14 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器14: ロッド     モーション: 振り
 * @default swing
 *
 * @param Weapon 14 Animation
 * @desc この武器14にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 15 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器15: こん棒     モーション: 振り
 * @default swing
 *
 * @param Weapon 15 Animation
 * @desc この武器15にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 16 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器16: チェーン     モーション: 振り
 * @default swing
 *
 * @param Weapon 16 Animation
 * @desc この武器16にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 6
 *
 * @param Weapon 17 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器17: 剣2     モーション: 振り
 * @default swing
 *
 * @param Weapon 17 Animation
 * @desc この武器17にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 7
 *
 * @param Weapon 18 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器18: 鉄パイプ     モーション: 振り
 * @default swing
 *
 * @param Weapon 18 Animation
 * @desc この武器18にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 19 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器19: スリングショット     モーション: 飛び道具
 * @default missile
 *
 * @param Weapon 19 Animation
 * @desc この武器19にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 11
 *
 * @param Weapon 20 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器20: ショットガン     モーション: 飛び道具
 * @default missile
 *
 * @param Weapon 20 Animation
 * @desc この武器20にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 111
 *
 * @param Weapon 21 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器21: ライフル     モーション: 飛び道具
 * @default missile
 *
 * @param Weapon 21 Animation
 * @desc この武器21にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 111
 *
 * @param Weapon 22 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器22: チェーンソー     モーション: 突き
 * @default thrust
 *
 * @param Weapon 22 Animation
 * @desc この武器22にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 7
 *
 * @param Weapon 23 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器23: レールガン     モーション: 飛び道具
 * @default missile
 *
 * @param Weapon 23 Animation
 * @desc この武器23にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 15
 *
 * @param Weapon 24 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器24: スタンロッド     モーション: 突き
 * @default thrust
 *
 * @param Weapon 24 Animation
 * @desc この武器24にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 15
 *
 * @param Weapon 25 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器25: スペルブック   モーション: 振り
 * @default swing
 *
 * @param Weapon 25 Animation
 * @desc この武器25にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 26 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器26: カスタム     モーション: 突き
 * @default thrust
 *
 * @param Weapon 26 Animation
 * @desc この武器26にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 27 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器27: カスタム     モーション: 突き
 * @default thrust
 *
 * @param Weapon 27 Animation
 * @desc この武器27にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 28 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器28: カスタム     モーション: 突き
 * @default thrust
 *
 * @param Weapon 28 Animation
 * @desc この武器28にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 29 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器29: カスタム     モーション: 突き
 * @default thrust
 *
 * @param Weapon 29 Animation
 * @desc この武器29にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @param Weapon 30 Motion
 * @desc この武器にデフォルトで使われるモーションを設定します。
 * 武器30: カスタム     モーション: 突き
 * @default thrust
 *
 * @param Weapon 30 Animation
 * @desc この武器30にデフォルトで使われる戦闘アニメーションを設定します。
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * このプラグインを使うには、別途で「YEP_BattleEngineCore」が必要です。
 * プラグインリスト内では、このプラグインが必ず「YEP_BattleEngineCore」の下に
 * 来るようにしてください。 
 *
 * この拡張プラグインは、敵に様々なアニメーションを付けることができます。
 * 静止中の敵に息をさせたり、浮遊させたりすることで、より生き生きとした表現が
 * 可能になります。
 *
 * もし「YEP_X_ActSeqPack2」を持っていて、浮遊の能力を使いたいのであれば、
 * このプラグインを「YEP_X_ActSeqPack2」の下に置くようにしてください。
 * 
 * このプラグインを使うには、敵キャラのメモ欄に下記のタグを挿入してください。
 *
 * ============================================================================
 * ノートタグ
 * ============================================================================
 *
 * これらのタグを敵のメモ欄に挿入することで、サイドビューバトラーに様々な変更
 * を加えることができます。
 *
 * 敵のNotetags:
 *
 *   --- 一般 ---
 *
 *   <Breathing>
 *   <No Breathing>
 *   呼吸のエフェクトを敵のスプライトに付与/解除することができます。
 *
 *   <Breathing Speed: x>
 *   一呼吸にかかるフレーム数を設定できます。x に入れる値が小さくなるほど、
 *   敵は呼吸が荒くなります。高くなるほどゆっくりと呼吸するようになります。
 *
 *   <Breathing Rate X: x.y>
 *   <Breathing Rate Y: x.y>
 *   x yで水平・垂直方向を指定して、呼吸時のX Yレートを変更することができます。
 *   (1.0)入力で100%の変更率、(0.0)で0%の変更率になります。
 *
 *   <Enable HP Link Breathing>
 *   <Disable HP Link Breathing>
 *   呼吸の速さをHPとリンクさせるかを変更できます。敵のHPが低くなるほど、
 *   呼吸がゆっくりになります。
 *
 *   <Floating>
 *   敵に浮遊しているかのようなアニメーションを付与できます。
 *
 *   <Floating Speed: x>
 *   浮遊のサイクルにかかるフレーム数を指定します。値が小さくなるほど、敵は
 *   素早く浮遊するようになります。 x の値が大きくなると、ゆっくり浮遊する
 *   ようになります。
 *
 *   <Floating Rate: x.y>
 *   浮遊のレートを x.y に変更します。(1.0)の時は100%の変化、(0.0)の時は
 *   0%の変化率となります。
 *
 *   <Floating Height: x>
 *   浮遊の高さの最小値を x にセットします。
 *
 *   <Scale Sprite: x%>
 *   スプライトのサイズを、オリジナルの物から x% 拡大/縮小できます。
 *   もし、幅もしくは高さ一方だけを変えたかったら下記のタグを使ってください。
 *
 *   <Scale Sprite Width: x%>
 *   <Scale Sprite Height: x%>
 *   これを使えば、スプライトのwidth(幅)やheight(高さ)を x% だけ変更できます。
 *   幅と高さ、一方だけのサイズを変えたい方はこちらを使ってください。
 *
 *   --- サイドビュー ---
 *
 *   <Sideview Battler: filename>
 *   サイドビューバトラーに使われるファイル名を指定します。
 *   これはあなたのプロジェクトの「img/sv_actors/」フォルダ内から参照されます。
 *   これを指定することで、下記のタグをバトラーに適用することができます。
 *   大文字小文字を区別して、画像ファイルの拡張子は無しで入力してください。
 *
 *   *例: SF_Actor3_8.png だったら <Sideview Battler: SF_Actor3_8> となります。
 *
 *   *注: もしこれらのタグの内１つでも使われた場合、サイドビューバトラーの選択
 *   はランダムプール内から行なわれます。しかし、それらの設定は、タグ内で設定
 *   されたその他全てのサイドビューセッティングと同じものになります。
 *
 *   --- 特殊サイドビュー ---
 *
 *   <Sideview Anchor X: y.z>
 *   <Sideview Anchor Y: y.z>
 *   敵のサイドビューバトラーに、 y.z でアンカーを設定します。
 *   変わったタイプのサイドビューバトラーを用いたイベントに使用されます。
 *   
 *   <Sideview Width: x>
 *   <Sideview Height: x>
 *   サイドビューバトラーの幅/高さを指定します。これは、普通とは異なる形態の
 *   バトラー画像を用いたサイドビューバトラーに用いられます。
 *
 *   <Sideview Collapse>
 *   このタグを入れた敵は、死亡の際に消滅してしまいます。
 *
 *   <Sideview No Collapse>
 *   このタグを入れた敵は、死んでも死体が残り消滅しなくなります。
 *
 *   <Sideview Frame Speed: x>
 *   サイドビューバトラーのフレームスピードを x の値に設定します。
 *   値が低くなるほど素早く動き、高い値だとゆっくり動くようになります。
 *
 *   --- モーション ---
 *
 *   <Sideview Attack Motion: swing>
 *   <Sideview Attack Motion: thrust>
 *   <Sideview Attack Motion: missile>
 *   敵が武器を持っていない場合の、アタックモーションを設定します。
 *   下記のモーション一覧内から、選ぶことができます。
 *    walk(前進)  wait(待機)  chant(詠唱)  guard(防御)  damage(ダメージ)
 *    evade(回避)  thrust(突き) swing(振り)  missile(飛び道具)  skill(スキル)
 *    spell(魔法)  item(アイテム)  escape(逃げる)  victory（勝利)  dying(瀕死)
 *    abnormal(状態異常)  sleep(睡眠)   dead(戦闘不能)
 *
 *   <Sideview Weapon: x>
 *   スプライトの武器イメージを x に変更できます。武器のシステムイメージを
 *   設定していない場合は、下記に従います。
 *
 *   0 - 無し
 *   1 - ダガー   7 - 弓  13 - メイス       19 - スリングショット  25 - 本
 *   2 - 剣  8 - クロスボウ   14 - ロッド   20 - ショットガン    26 - カスタム
 *   3 - フレイル    9 - 銃       15 - 棍棒    21 - ライフル     27 - カスタム
 *   4 - 斧     10 - 爪      16 - 鎖      22 - チェーンソー   28 - カスタム
 *   5 - ムチ    11 - グローブ   17 - 剣2    23 - レールガン    29 - カスタム
 *   6 - 杖   12 - 棘   18 - 鉄パイプ  24 - スタンロッド   30 - カスタム
 *
 *   * 注: 複数のタグを挿入すると、武器のランダムプール内に格納されることに
 *   なります。このタグを使う際は、プラグインパラメータ内の全てのデフォルト設定
 *   が使用されることになります。もしもっとユニークな設定をしたい場合は、下記の
 *   タグを使ってみてください。:
 *
 *   <Sideview Weapon: x, y, z>
 *   これにより、スプライトの武器イメージを x に、モーションを y に
 *   アタックアニメーションを z にカスタマイズすることができます。
 *   例えば下記のように使います。
 *   
 *      <Sideview Weapon: 2, swing, 6>
 *
 *   この例では「剣」を使って、「振り」のモーションを行い、
 *   攻撃時には戦闘アニメーション「6」を再生します。
 *
 *   <Sideview Idle Motion: x>
 *   サイドビューの敵に、待機モーションを付与できます。下記のモーション一覧から
 *   好きなものを利用することができます。:
 *    walk(前進)  wait(待機)  chant(詠唱)  guard(防御)  damage(ダメージ)
 *    evade(回避)  thrust(突き) swing(振り)  missile(飛び道具)  skill(スキル)
 *    spell(魔法)  item(アイテム)  escape(逃げる)  victory（勝利)  dying(瀕死)
 *    abnormal(状態異常)  sleep(睡眠)   dead(戦闘不能)
 *   * 注: 複数のタグを挿入すると、モーションのランダムプール内に格納されること
 *   になります。
 *
 *  下記のタグでも同様に、モーション一覧から x に入るものを選んでください。
 * 
 *   <Sideview Damage Motion: x>
 *   サイドビューの敵に、ダメージモーションを付与できます。
 *
 *   <Sideview Evade Motion: x>
 *   サイドビューの敵に、回避モーションを付与できます。
 *
 *   <Sideview Escape Motion: x>
 *   サイドビューの敵に、逃避モーションを付与できます。
 *
 *   <Sideview Guard Motion: x>
 *   サイドビューの敵に、防御モーションを付与できます。
 *
 *   <Sideview Abnormal Motion: x>
 *   サイドビューの敵に、状態異常モーションを付与できます。
 *
 *   <Sideview Sleep Motion: x>
 *   サイドビューの敵に、睡眠モーションを付与できます。
 *
 *   <Sideview Dying Motion: x>
 *   サイドビューの敵に、瀕死モーションを付与できます。
 *
 *   <Sideview Dead Motion: x>
 *   サイドビューの敵に、死亡(戦闘不能)モーションを付与できます。
 *
 *   --- 影 ---
 *
 *   <Sideview Show Shadow>
 *   これを挿入することで、サイドビュースプライトに影を付けることができます。
 *   デフォルト設定は「Battle Engine Core」の 'Show Shadows'に依拠しています。
 *
 *   <Sideview Hide Shadow>
 *   これを挿入することで、サイドビュースプライトの影を隠すことができます。
 *   デフォルト設定は「Battle Engine Core」の 'Show Shadows'に依拠しています。
 *
 *   <Sideview Shadow Width: x%>
 *   影の幅をデフォルトから x% だけ大きく/小さくすることができます。
 *   デフォルトサイズは「img/system」フォルダから参照されたものです。
 *
 *   <Sideview Shadow Height: x%>
 *   影の高さをデフォルトから x% だけ大きく/小さくすることができます。
 *   デフォルトサイズは「img/system」フォルダから参照されたものです。
 *
 * ステートのタグ:
 *
 *   <Hide Sideview Weapon>
 *   サイドビュー時の武器エフェクトを隠すことができます。
 *   アタックモーションは、何も持っていなかった時のものに戻り、
 *   アタックアニメーションはデフォルトのものに戻ります。
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Fixed a bug with Sprite Smoothing disabled on Shadows.
 * - Fixed a bug with the anchor Y positions being overwritten.
 *
 * Version 1.03:
 * - Fixed a bug that would cause <Sideview Width: x> & <Sideview Height: x>
 * notetags to crash the game.
 *
 * Version 1.02:
 * - Synchronized state icons and overlays with floating enemies.
 *
 * Version 1.01:
 * - Added 'HP Link Breathing' plugin parameter. If enabled, the lower the HP,
 * the slower the enemy breathes.
 * - Added <Enable HP Link Breathing> and <Disable HP Link Breathing> notetags.
 *
 * Version 1.00:
 * - Finished plugin! Hooray!
 */
//=============================================================================


if (Imported.YEP_BattleEngineCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_AnimatedSVEnemies');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.SVEAnchorX = Number(Yanfly.Parameters['Anchor X']);
Yanfly.Param.SVEAnchorY = Number(Yanfly.Parameters['Anchor Y']);
Yanfly.Param.SVESmoothing = eval(String(Yanfly.Parameters['Sprite Smoothing']));
Yanfly.Param.SVEWidth = String(Yanfly.Parameters['Sprite Width']);
Yanfly.Param.SVEHeight = String(Yanfly.Parameters['Sprite Height']);
Yanfly.Param.SVECollapse = eval(String(Yanfly.Parameters['Collapse']));
Yanfly.Param.SVEFrameSpeed = Number(Yanfly.Parameters['Frame Speed']);

Yanfly.Param.SVEBreathing = Number(Yanfly.Parameters['Enable Breathing']);
Yanfly.Param.SVEBreathSpeed = Number(Yanfly.Parameters['Breathing Speed']);
Yanfly.Param.SVEBreathXRate = Number(Yanfly.Parameters['Breathing X Rate']);
Yanfly.Param.SVEBreathYRate = Number(Yanfly.Parameters['Breathing Y Rate']);
Yanfly.Param.SVELinkBreathing = eval(Yanfly.Parameters['HP Link Breathing']);

Yanfly.Param.SVEFloatSpeed = Number(Yanfly.Parameters['Floating Speed']);
Yanfly.Param.SVEFloatRate = Number(Yanfly.Parameters['Floating Rate']);
Yanfly.Param.SVEFloatHeight = Number(Yanfly.Parameters['Floating Height']);

Yanfly.Param.SVEShowShadow = eval(String(Yanfly.Parameters['Show Shadow']));
Yanfly.Param.SVEShadowScaleX = String(Yanfly.Parameters['Shadow Scale X']);
Yanfly.Param.SVEShadowScaleY = String(Yanfly.Parameters['Shadow Scale Y']);

Yanfly.Param.SVEAttackMotion = String(Yanfly.Parameters['Attack Motion']);
Yanfly.Param.SVEIdleMotion = String(Yanfly.Parameters['Idle Motion']);
Yanfly.Param.SVEDmgMotion = String(Yanfly.Parameters['Damage Motion']);
Yanfly.Param.SVEEvadeMotion = String(Yanfly.Parameters['Evade Motion']);
Yanfly.Param.SVEEscMotion = String(Yanfly.Parameters['Escape Motion']);
Yanfly.Param.SVEGuardMotion = String(Yanfly.Parameters['Guard Motion']);
Yanfly.Param.SVEAbnMotion = String(Yanfly.Parameters['Abnormal Motion']);
Yanfly.Param.SVESleepMotion = String(Yanfly.Parameters['Sleep Motion']);
Yanfly.Param.SVEDyingMotion = String(Yanfly.Parameters['Dying Motion']);
Yanfly.Param.SVEDeadMotion = String(Yanfly.Parameters['Dead Motion']);

Yanfly.Param.SVEWeaponIndex = Number(Yanfly.Parameters['Weapon Image Index']);
Yanfly.Param.SVEWeaponMotion = {};
Yanfly.Param.SVEWeaponAnimation = {};
Yanfly.Param.SVEWeaponMotion[0] = Yanfly.Param.SVEAttackMotion.toLowerCase();
for (Yanfly.i = 1; Yanfly.i < 31; ++Yanfly.i) {
	Yanfly.s1 = 'Weapon ' + Yanfly.i + ' Motion';
	Yanfly.s2 = String(Yanfly.Parameters[Yanfly.s1]);
	Yanfly.Param.SVEWeaponMotion[Yanfly.i] = Yanfly.s2.toLowerCase();
	Yanfly.s1 = 'Weapon ' + Yanfly.i + ' Animation';
	Yanfly.s2 = Number(Yanfly.Parameters[Yanfly.s1]);
	Yanfly.Param.SVEWeaponAnimation[Yanfly.i] = Yanfly.s2;
};

//=============================================================================
// DataManager
//=============================================================================

Yanfly.SVE.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.SVE.DataManager_isDatabaseLoaded.call(this)) return false;
		DataManager.processSVENotetags1($dataEnemies);
    DataManager.processSVENotetags2($dataStates);
		return true;
};

DataManager.processSVENotetags1 = function(group) {
  var noteWeapon = /<(?:SIDEVIEW WEAPON):[ ](\d+),[ ](.*),[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.sideviewBattler = [];
    obj.sideviewAttackMotion = Yanfly.Param.SVEAttackMotion.toLowerCase();
    obj.sideviewIdleMotion = [];
    obj.sideviewDmgMotion = Yanfly.Param.SVEDmgMotion.toLowerCase();
    obj.sideviewEvadeMotion = Yanfly.Param.SVEEvadeMotion.toLowerCase();
    obj.sideviewEscMotion = Yanfly.Param.SVEEscMotion.toLowerCase();
    obj.sideviewGuardMotion = Yanfly.Param.SVEGuardMotion.toLowerCase();
    obj.sideviewAbnMotion = Yanfly.Param.SVEAbnMotion.toLowerCase();
    obj.sideviewSleepMotion = Yanfly.Param.SVESleepMotion.toLowerCase();
    obj.sideviewDyingMotion = Yanfly.Param.SVEDyingMotion.toLowerCase();
    obj.sideviewDeadMotion = Yanfly.Param.SVEDeadMotion.toLowerCase();
    obj.sideviewAnchorX = Yanfly.Param.SVEAnchorX;
    obj.sideviewAnchorY = Yanfly.Param.SVEAnchorY;
    obj.sideviewWeaponImage = [];
    obj.sideviewWidth = Yanfly.Param.SVEWidth;
    obj.sideviewHeight = Yanfly.Param.SVEHeight;
    obj.sideviewCollapse = Yanfly.Param.SVECollapse;
    obj.sideviewShadowShow = Yanfly.Param.SVEShowShadow;
    obj.sideviewShadowScaleX = Yanfly.Param.SVEShadowScaleX;
    obj.sideviewShadowScaleY = Yanfly.Param.SVEShadowScaleY;
    obj.spriteScaleX = 1;
    obj.spriteScaleY = 1;
    obj.sideviewFrameSpeed = Yanfly.Param.SVEFrameSpeed;
    obj.sideviewBreathing = [1, 3].contains(Yanfly.Param.SVEBreathing);
    obj.sideviewBreathSpeed = Math.max(1, Yanfly.Param.SVEBreathSpeed);
    obj.sideviewBreathXRate = Math.max(0, Yanfly.Param.SVEBreathXRate);
    obj.sideviewBreathYRate = Math.max(0, Yanfly.Param.SVEBreathYRate);
    obj.sideviewLinkBreathing = Yanfly.Param.SVELinkBreathing;
    obj.sideviewFloating = false;
    obj.sideviewFloatSpeed = Yanfly.Param.SVEFloatSpeed;
    obj.sideviewFloatRate = Yanfly.Param.SVEFloatRate;
    obj.sideviewFloatHeight = Yanfly.Param.SVEFloatHeight;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
       if (line.match(/<(?:SCALE SPRITE):[ ](\d+)([%％])>/i)) {
        obj.spriteScaleX = parseFloat(RegExp.$1) * 0.01;
        obj.spriteScaleY = obj.spriteScaleX;
      } else if (line.match(/<(?:SCALE SPRITE WIDTH):[ ](\d+)([%％])>/i)) {
        obj.spriteScaleX = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<(?:SCALE SPRITE HEIGHT):[ ](\d+)([%％])>/i)) {
        obj.spriteScaleY = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<(?:SIDEVIEW BATTLER):[ ](.*)>/i)) {
				obj.sideviewBattler.push(String(RegExp.$1));
        obj.sideviewBreathing = [2, 3].contains(Yanfly.Param.SVEBreathing);
			} else if (line.match(/<(?:SIDEVIEW ATTACK MOTION):[ ](.*)>/i)) {
				obj.sideviewAttackMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW IDLE MOTION):[ ](.*)>/i)) {
				obj.sideviewIdleMotion.push(String(RegExp.$1).toLowerCase());
			} else if (line.match(/<(?:SIDEVIEW DAMAGE MOTION):[ ](.*)>/i)) {
				obj.sideviewDmgMotion.push(String(RegExp.$1).toLowerCase());
			} else if (line.match(/<(?:SIDEVIEW EVADE MOTION):[ ](.*)>/i)) {
				obj.sideviewEvadeMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW ESCAPE MOTION):[ ](.*)>/i)) {
				obj.sideviewEscMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW GUARD MOTION):[ ](.*)>/i)) {
				obj.sideviewGuardMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW ABNORMAL MOTION):[ ](.*)>/i)) {
				obj.sideviewAbnMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW SLEEP MOTION):[ ](.*)>/i)) {
				obj.sideviewSleepMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW DYING MOTION):[ ](.*)>/i)) {
				obj.sideviewDyingMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW DEAD MOTION):[ ](.*)>/i)) {
				obj.sideviewDeadMotion = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<(?:SIDEVIEW ANCHOR X):[ ](\d+)[.](\d+)>/i)) {
				obj.sideviewAnchorX = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
			} else if (line.match(/<(?:SIDEVIEW ANCHOR Y):[ ](\d+)[.](\d+)>/i)) {
				obj.sideviewAnchorY = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
			} else if (line.match(/<(?:SIDEVIEW WEAPON):[ ](\d+)>/i)) {
        var weaponId = parseInt(RegExp.$1);
        var motionId = Yanfly.Param.SVEWeaponMotion[weaponId].toLowerCase();
        var aniId = Yanfly.Param.SVEWeaponAnimation[weaponId];
        var index = obj.sideviewWeaponImage.length;
        obj.sideviewWeaponImage[index] = [weaponId, motionId, aniId];
      } else if (line.match(noteWeapon)) {
        var weaponId = parseInt(RegExp.$1);
        var motionId = String(RegExp.$2).toLowerCase();
        var aniId = parseInt(RegExp.$3);
        var index = obj.sideviewWeaponImage.length;
        obj.sideviewWeaponImage[index] = [weaponId, motionId, aniId];
      } else if (line.match(/<(?:SIDEVIEW WIDTH):[ ](\d+)>/i)) {
        obj.sideviewWidth = parseInt(RegExp.$1);
      } else if (line.match(/<(?:SIDEVIEW HEIGHT):[ ](\d+)>/i)) {
        obj.sideviewHeight = parseInt(RegExp.$1);
      } else if (line.match(/<(?:SIDEVIEW COLLAPSE)>/i)) {
        obj.sideviewCollapse = true;
      } else if (line.match(/<(?:SIDEVIEW NO COLLAPSE)>/i)) {
        obj.sideviewCollapse = false;
      } else if (line.match(/<(?:SIDEVIEW SHOW SHADOW)>/i)) {
        obj.sideviewShadowShow = true;
      } else if (line.match(/<(?:SIDEVIEW HIDE SHADOW)>/i)) {
        obj.sideviewShadowShow = false;
      } else if (line.match(/<(?:SIDEVIEW SHADOW WIDTH):[ ](\d+)([%％])>/i)) {
				obj.sideviewShadowScaleX = parseFloat(RegExp.$1 * 0.01);
			} else if (line.match(/<(?:SIDEVIEW SHADOW HEIGHT):[ ](\d+)([%％])>/i)) {
				obj.sideviewShadowScaleY = parseFloat(RegExp.$1 * 0.01);
			} else if (line.match(/<(?:SIDEVIEW FRAME SPEED):[ ](\d+)>/i)) {
        obj.sideviewFrameSpeed = parseInt(RegExp.$1);
      } else if (line.match(/<(?:FLOATING|float)>/i)) {
        obj.sideviewFloating = true;
      } else if (line.match(/<(?:FLOATING SPEED):[ ](\d+)>/i)) {
        obj.sideviewFloatSpeed = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(?:FLOATING RATE):[ ](\d+)[.](\d+)>/i)) {
        var rate = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
        obj.sideviewFloatRate = rate;
      } else if (line.match(/<(?:FLOATING HEIGHT):[ ](\d+)>/i)) {
        obj.sideviewFloatHeight = parseInt(RegExp.$1);
      }
		}
    // Breathing
    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:BREATHING)>/i)) {
        obj.sideviewBreathing = true;
      } else if (line.match(/<(?:NO BREATHING)>/i)) {
        obj.sideviewBreathing = false;
      } else if (line.match(/<(?:BREATHING SPEED):[ ](\d+)>/i)) {
        obj.sideviewBreathSpeed = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(?:BREATHING RATE X):[ ](\d+)[.](\d+)>/i)) {
        var rate = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
        obj.sideviewBreathXRate = rate;
      } else if (line.match(/<(?:BREATHING RATE Y):[ ](\d+)[.](\d+)>/i)) {
        var rate = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
        obj.sideviewBreathYRate = rate;
      } else if (line.match(/<(?:ENABLE HP LINK BREATHING)>/i)) {
        obj.sideviewLinkBreathing = true;
      } else if (line.match(/<(?:DISABLE HP LINK BREATHING)>/i)) {
        obj.sideviewLinkBreathing = false;
      }
    }
		// Create Defaults
		if (obj.sideviewIdleMotion.length <= 0) {
			obj.sideviewIdleMotion = [Yanfly.Param.SVEIdleMotion.toLowerCase()];
		}
		if (obj.sideviewWeaponImage.length <= 0) {
			var weaponId = Yanfly.Param.SVEWeaponIndex;
			var motionId = Yanfly.Param.SVEWeaponMotion[weaponId].toLowerCase();
			var aniId = Yanfly.Param.SVEWeaponAnimation[weaponId];
			obj.sideviewWeaponImage = [[weaponId, motionId, aniId]];
		}
    obj.sideviewFrameSpeed = Math.max(1, obj.sideviewFrameSpeed);
	}
};

DataManager.processSVENotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.hideSVWeapon;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:HIDE SIDEVIEW WEAPON)>/i)) {
        obj.hideSVWeapon = true;
      }
    }
  }
};

//=============================================================================
// ImageManager
//=============================================================================

if (Yanfly.Param.SVESmoothing) {

ImageManager.loadSvActor = function(filename, hue) {
    return this.loadBitmap('img/sv_actors/', filename, hue, true);
};

ImageManager.loadSystemSmooth = function(filename, hue) {
    return this.loadBitmap('img/system/', filename, hue, true);
};

}; // Yanfly.Param.SVESmoothing

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.SVE.Game_Battler_spriteWidth = Game_Battler.prototype.spriteWidth;
Game_Battler.prototype.spriteWidth = function() {
    var value = Yanfly.SVE.Game_Battler_spriteWidth.call(this);
    if (this.isEnemy()) value *= Math.abs(this.spriteScaleX());
    return value;
};

Yanfly.SVE.Game_Battler_spriteHeight = Game_Battler.prototype.spriteHeight;
Game_Battler.prototype.spriteHeight = function() {
    var value = Yanfly.SVE.Game_Battler_spriteHeight.call(this);
    if (this.isEnemy()) value *= Math.abs(this.spriteScaleY());
    return value;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.actor = function() {
    return this.enemy();
};

Game_Enemy.prototype.clearSVAttributes = function() {
    this._svWeaponImageId = undefined;
    this._svAttackMotion = undefined;
    this._svAttackAnimationId = undefined;
    this._svBattlerName = undefined;
    this._svIdleMotion = undefined;
};

Game_Enemy.prototype.setupSVAttributes = function() {
    var array = this.enemy().sideviewWeaponImage;
    var newArray = Yanfly.Util.getRandomElement(array);
    this._svWeaponImageId = newArray[0];
    this._svAttackMotion = newArray[1];
    this._svAttackAnimationId = newArray[2];
    if (this._svAttackAnimationId === undefined) this._svAttackAnimationId =
      Yanfly.SVE.Game_Enemy_attackAnimationId.call(this);
};

Yanfly.SVE.Game_Enemy_attackAnimationId =
		Game_Enemy.prototype.attackAnimationId;
Game_Enemy.prototype.attackAnimationId = function() {
		if (this.hasSVBattler() && !this.isHideSVWeapon()) {
			if (this._svAttackAnimationId) return this._svAttackAnimationId;
			this.setupSVAttributes();
			return this._svAttackAnimationId;
		}
    return Yanfly.SVE.Game_Enemy_attackAnimationId.call(this);
};

Game_Enemy.prototype.svBattlerName = function() {
		if (this._svBattlerName) return this._svBattlerName;
		var array = this.enemy().sideviewBattler;
		this._svBattlerName = Yanfly.Util.getRandomElement(array);
    return this._svBattlerName;
};

Game_Enemy.prototype.hasSVBattler = function() {
    return this.svBattlerName() !== undefined;
};

Game_Enemy.prototype.weaponImageId = function() {
    if (this.isHideSVWeapon()) return 0;
		if (this._svWeaponImageId) return this._svWeaponImageId;
		this.setupSVAttributes();
    return this._svWeaponImageId;
};

Game_Enemy.prototype.attackMotion = function() {
    if (this.weaponImageId() === 0) return this.enemy().sideviewAttackMotion;
		if (this._svAttackMotion) return this._svAttackMotion;
		this.setupSVAttributes();
    return this._svAttackMotion;
};

Game_Enemy.prototype.idleMotion = function() {
		if (this._svIdleMotion) return this._svIdleMotion;
		var array = this.enemy().sideviewIdleMotion;
		this._svIdleMotion = Yanfly.Util.getRandomElement(array);
    return this._svIdleMotion;
};

Game_Enemy.prototype.damageMotion = function() {
    return this.enemy().sideviewDmgMotion;
};

Game_Enemy.prototype.evadeMotion = function() {
    return this.enemy().sideviewEvadeMotion;
};

Game_Enemy.prototype.escapeMotion = function() {
    return this.enemy().sideviewEscMotion;
};

Game_Enemy.prototype.guardMotion = function() {
    return this.enemy().sideviewGuardMotion;
};

Game_Enemy.prototype.abnormalMotion = function() {
    return this.enemy().sideviewAbnMotion;
};

Game_Enemy.prototype.sleepMotion = function() {
    return this.enemy().sideviewSleepMotion;
};

Game_Enemy.prototype.dyingMotion = function() {
    return this.enemy().sideviewDyingMotion;
};

Game_Enemy.prototype.deadMotion = function() {
    return this.enemy().sideviewDeadMotion;
};

Game_Enemy.prototype.sideviewAnchorX = function() {
    return this.enemy().sideviewAnchorX;
};

Game_Enemy.prototype.sideviewAnchorY = function() {
    return this.enemy().sideviewAnchorY;
};

Game_Enemy.prototype.anchorX = function() {
    if (this.hasSVBattler()) return this.sideviewAnchorX();
    return Game_Battler.prototype.anchorX.call(this);
};

Game_Enemy.prototype.anchorY = function() {
    if (this.hasSVBattler()) return this.sideviewAnchorY();
    return Game_Battler.prototype.anchorY.call(this);
};

Game_Enemy.prototype.sideviewWidth = function() {
    return this.enemy().sideviewWidth;
};

Game_Enemy.prototype.sideviewHeight = function() {
    return this.enemy().sideviewHeight;
};

Game_Enemy.prototype.sideviewCollapse = function() {
    return this.enemy().sideviewCollapse;
};

Game_Enemy.prototype.showSideviewShadow = function() {
    return this.enemy().sideviewShadowShow;
};

Game_Enemy.prototype.sideviewShadowScaleX = function() {
    return this.enemy().sideviewShadowScaleX;
};

Game_Enemy.prototype.sideviewShadowScaleY = function() {
    return this.enemy().sideviewShadowScaleY;
};

Game_Enemy.prototype.spriteScaleX = function() {
    if (this.hasSVBattler()) return this.enemy().spriteScaleX * -1;
    return this.enemy().spriteScaleX;
};

Game_Enemy.prototype.spriteScaleY = function() {
    return this.enemy().spriteScaleY;
};

Game_Enemy.prototype.sideviewFrameSpeed = function() {
    return this.enemy().sideviewFrameSpeed;
};

Game_Enemy.prototype.performAttack = function() {
    if (!this.hasSVBattler()) {
      return Game_Battler.prototype.performAttack.call(this);
    }
    this.forceMotion(this.attackMotion());
    this.startWeaponAnimation(this.weaponImageId());
};

Game_Enemy.prototype.performAction = function(action) {
    if (!this.hasSVBattler()) {
      return Game_Battler.prototype.performAction.call(this, action);
    }
    Game_Actor.prototype.performAction.call(this, action);
};

Yanfly.SVE.Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
Game_Enemy.prototype.performDamage = function() {
    if (!this.hasSVBattler()) {
      return Yanfly.SVE.Game_Enemy_performDamage.call(this);
    }
    Game_Battler.prototype.performDamage.call(this);
    if (this.isSpriteVisible()) {
      this.requestMotion(this.damageMotion());
    } else {
      $gameScreen.startShake(5, 5, 10);
    }
    SoundManager.playEnemyDamage();
};

Game_Enemy.prototype.performEvasion = function() {
    Game_Battler.prototype.performEvasion.call(this);
    if (!this.hasSVBattler()) return;
    this.requestMotion(this.evadeMotion());
};

Game_Enemy.prototype.performMagicEvasion = function() {
    Game_Battler.prototype.performMagicEvasion.call(this);
    if (!this.hasSVBattler()) return;
    this.requestMotion(this.evadeMotion());
};

Game_Enemy.prototype.performCounter = function() {
    Game_Battler.prototype.performCounter.call(this);
    if (!this.hasSVBattler()) return;
    this.performAttack();
};

Game_Enemy.prototype.performEscape = function() {
    if (!this.hasSVBattler()) return;
    if (!this.canMove()) return;
    this.requestMotion(this.escapeMotion());
};

Game_Enemy.prototype.isBreathing = function() {
    if (this.isDead()) return false;
    return this.enemy().sideviewBreathing;
};

Game_Enemy.prototype.breathingSpeed = function() {
    return this.enemy().sideviewBreathSpeed;
};

Game_Enemy.prototype.breathXRate = function() {
    return this.enemy().sideviewBreathXRate;
};

Game_Enemy.prototype.breathYRate = function() {
    return this.enemy().sideviewBreathYRate;
};

Game_Enemy.prototype.linkBreathing = function() {
    return this.enemy().sideviewLinkBreathing;
};

Game_Enemy.prototype.isFloating = function() {
    if (this.isDead()) return false;
    return this.enemy().sideviewFloating;
};

Game_Enemy.prototype.floatSpeed = function() {
    return this.enemy().sideviewFloatSpeed;
};

Game_Enemy.prototype.floatRate = function() {
    return this.enemy().sideviewFloatRate;
};

Game_Enemy.prototype.floatHeight = function() {
    return this.enemy().sideviewFloatHeight;
};

Game_Enemy.prototype.isHideSVWeapon = function() {
    var max = this.states().length;
    for (var i = 0; i < max; ++i) {
      var state = this.states()[i];
      if (state && state.hideSVWeapon) return true;
    }
    return false;
};

Yanfly.SVE.Game_Enemy_transform = Game_Enemy.prototype.transform;
Game_Enemy.prototype.transform = function(enemyId) {
    this.clearSVAttributes();
    Yanfly.SVE.Game_Enemy_transform.call(this, enemyId);
    this.battler().setBattler(this);
    this.battler().setTransform(this);
};

//=============================================================================
// Game_Party
//=============================================================================

Yanfly.SVE.Game_Party_requestMotionRefresh =
    Game_Party.prototype.requestMotionRefresh;
Game_Party.prototype.requestMotionRefresh = function() {
    Yanfly.SVE.Game_Party_requestMotionRefresh.call(this);
    $gameTroop.requestMotionRefresh();
};

//=============================================================================
// Sprite_Enemy
//=============================================================================

Yanfly.SVE.Sprite_Enemy_initMembers = Sprite_Enemy.prototype.initMembers;
Sprite_Enemy.prototype.initMembers = function() {
    Yanfly.SVE.Sprite_Enemy_initMembers.call(this);
    this.initSVSprites();
};

Sprite_Enemy.prototype.initSVSprites = function() {
    this._svRand = Math.random() * 10000;
    this._svBattlerName = '';
    this._motion = null;
    this._motionCount = 0;
    this._pattern = 0;
    this._svBattlerEnabled = false;
    this.createShadowSprite();
    this.createWeaponSprite();
    this.createMainSprite();
    this.createStateSprite();
    this._effectTarget = this;
};

Sprite_Enemy.prototype.setTransform = function(battler) {
    this._shadowSprite.opacity = 0;
    this._weaponSprite.opacity = 0;
    this._mainSprite.opacity = 0;
    this._stateSprite.opacity = 0;
    this.createShadowSprite();
    this.createWeaponSprite();
    this.createMainSprite();
    this.createStateSprite();
};

Sprite_Enemy.prototype.createMainSprite = function() {
    Sprite_Actor.prototype.createMainSprite.call(this);
};

Sprite_Enemy.prototype.createShadowSprite = function() {
    this._shadowSprite = new Sprite();
    if (Yanfly.Param.SVESmoothing) {
      this._shadowSprite.bitmap = ImageManager.loadSystemSmooth('Shadow2');
    } else {
      this._shadowSprite.bitmap = ImageManager.loadSystem('Shadow2');
    }    
    this._shadowSprite.anchor.x = 0.5;
    this._shadowSprite.anchor.y = 0.5;
    this._shadowSprite.y = -2;
    this.addChild(this._shadowSprite);
    this._shadowSprite.opacity = 0;
};

Sprite_Enemy.prototype.createWeaponSprite = function() {
    Sprite_Actor.prototype.createWeaponSprite.call(this);
};

Sprite_Enemy.prototype.createStateSprite = function() {
    Sprite_Actor.prototype.createStateSprite.call(this);
};

Yanfly.SVE.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    this._svBattlerEnabled = false;
    Yanfly.SVE.Sprite_Enemy_setBattler.call(this, battler);
    this.setSVBattler(battler);
};

Sprite_Enemy.prototype.setMirror = function(value) {
    if (this._svBattlerEnabled) value = !value;
    Sprite_Battler.prototype.setMirror.call(this, value);
};

Sprite_Enemy.prototype.setSVBattler = function(battler) {
    if (!this._enemy) return;
    if (this._enemy.svBattlerName() === undefined) return;
    this._adjustMainBitmapSettings = false;
    this._actor = this._enemy;
    this._svBattlerEnabled = true;
    this._stateSprite.setup(battler);
};

Yanfly.SVE.Sprite_Enemy_update = Sprite_Enemy.prototype.update;
Sprite_Enemy.prototype.update = function() {
    Yanfly.SVE.Sprite_Enemy_update.call(this);
    if (this._svBattlerEnabled) this.updateMotion();
    this.updateBreathing();
};

Yanfly.SVE.Sprite_Enemy_updateStateSprite =
    Sprite_Enemy.prototype.updateStateSprite;
Sprite_Enemy.prototype.updateStateSprite = function() {
    if (this._enemy && this._enemy.hasSVBattler()) {
      this.updateSVStateSprite();
    } else {
      Yanfly.SVE.Sprite_Enemy_updateStateSprite.call(this);
    }
    this.updateFloatingStateSprite();
};

Sprite_Enemy.prototype.updateSVStateSprite = function() {
    var height = this._mainSprite.height * -1;
    height -= Sprite_StateIcon._iconHeight;
    this._stateIconSprite.y = height;
    this._stateSprite.y = 0;
};

Sprite_Enemy.prototype.updateFloatingStateSprite = function() {
    if (this._enemy && this._enemy.isFloating()) {
      var heightRate = this.addFloatingHeight();
      this._stateIconSprite.y += heightRate * this.height;
      this._stateSprite.y += heightRate * this.height;
    };
};

Sprite_Enemy.prototype.updateBreathing = function() {
    if (!this._enemy) return;
    if (this._enemy.isBreathing()) {
      var c = Graphics.frameCount + this._svRand;
      var s = this._enemy.breathingSpeed();
      var rateX = this._enemy.breathXRate();
      var rateY = this._enemy.breathYRate();
      if (this._enemy.linkBreathing()) s /= this._enemy.hpRate();
      var scaleX = Math.cos(c / s) * rateX;
      var scaleY = Math.cos(c / s) * rateY;
    } else {
      var scaleX = 0;
      var scaleY = 0;
    }
    this.scale.x = this._enemy.spriteScaleX() + scaleX;
    this.scale.y = this._enemy.spriteScaleY() + scaleY;
};

if (Imported.YEP_X_ActSeqPack2) {

Yanfly.SVE.Sprite_Battler_getFloatHeight = 
    Sprite_Battler.prototype.getFloatHeight;
Sprite_Battler.prototype.getFloatHeight = function() {
    var value = Yanfly.SVE.Sprite_Battler_getFloatHeight.call(this);
    value -= this.addFloatingHeight();
    return value;
};

Sprite_Battler.prototype.addFloatingHeight = function() {
    value = 0;
    if (this._enemy && this._enemy.isFloating()) {
      var c = Graphics.frameCount + this._svRand;
      var s = this._enemy.floatSpeed();
      var rate = this._enemy.floatRate();
      value += Math.cos(c / s) * rate - rate;
      var height = this._enemy.floatHeight();
      value -= height / this._enemy.spriteHeight();
    }
    return value;
};

}; // Imported.YEP_X_ActSeqPack2

Yanfly.SVE.Sprite_Enemy_updateBitmap = Sprite_Enemy.prototype.updateBitmap;
Sprite_Enemy.prototype.updateBitmap = function() {
    Yanfly.SVE.Sprite_Enemy_updateBitmap.call(this);
    if (!this._svBattlerEnabled) this.updateScale();
    this.updateSVBitmap();
    this.adjustAnchor();
};

Sprite_Enemy.prototype.updateSVBitmap = function() {
    Sprite_Battler.prototype.updateBitmap.call(this);
    var name = this._enemy.svBattlerName();
    if (this._svBattlerEnabled && this._svBattlerName !== name) {
      this._createdDummyMainSprite = false;
      this._svBattlerName = name;
      this._mainSprite.bitmap = ImageManager.loadSvActor(name);
      this.adjustAnchor();
      this.refreshMotion();
      this.updateScale();
    } else if (this._svBattlerName === '') {
      this._svBattlerName = '';
      if (this._createdDummyMainSprite) return;
      this._createdDummyMainSprite = true;
      this._mainSprite = new Sprite_Base();
      this._mainSprite.anchor.x = 0.5;
      this._mainSprite.anchor.y = 1;
    }
};

Sprite_Enemy.prototype.adjustAnchor = function() {
    if (!this._mainSprite) return;
		this._mainSprite.anchor.x = this._enemy.sideviewAnchorX();
    this._mainSprite.anchor.y = this._enemy.sideviewAnchorY();
};

Sprite_Enemy.prototype.updateScale = function() {
    this.scale.x = this._enemy.spriteScaleX();
    this.scale.y = this._enemy.spriteScaleY();
};

Yanfly.SVE.Sprite_Enemy_updateFrame = Sprite_Enemy.prototype.updateFrame;
Sprite_Enemy.prototype.updateFrame = function() {
    if (this._svBattlerEnabled) return this.updateSVFrame();
    Yanfly.SVE.Sprite_Enemy_updateFrame.call(this);
};

Sprite_Enemy.prototype.updateSVFrame = function() {
    Sprite_Battler.prototype.updateFrame.call(this);
    var bitmap = this._mainSprite.bitmap;
    if (bitmap.width <= 0) return;
    this._effectTarget = this._mainSprite;
    var motionIndex = this._motion ? this._motion.index : 0;
    var pattern = this._pattern < 3 ? this._pattern : 1;
    var cw = bitmap.width / 9;
    var ch = bitmap.height / 6;
    var cx = Math.floor(motionIndex / 6) * 3 + pattern;
    var cy = motionIndex % 6;
    var cdh = 0;
    if (this._effectType === 'bossCollapse') {
      cdh = ch - this._effectDuration;
    }
    this.setFrame(cx * cw, cy * ch, cw, ch);
    this._mainSprite.setFrame(cx * cw, cy * ch, cw, ch - cdh);
    this.adjustMainBitmapSettings(bitmap);
    this.adjustSVShadowSettings();
};

Sprite_Enemy.prototype.adjustMainBitmapSettings = function(bitmap) {
    if (this._adjustMainBitmapSettings) return;
    this._adjustMainBitmapSettings = true;
    var svw = this._enemy.sideviewWidth();
    var svh = this._enemy.sideviewHeight();
    if (svw === 'auto') svw = bitmap.width / 9;
    if (svh === 'auto') svh = bitmap.height / 6;
    svw = Math.floor(Math.abs(svw * this._enemy.spriteScaleX()));
    svh = Math.floor(Math.abs(svh * this._enemy.spriteScaleY()));
    this.bitmap = new Bitmap(svw, svh);
};

Sprite_Enemy.prototype.adjustSVShadowSettings = function() {
    if (this._enemy.showSideviewShadow()) this._shadowSprite.opacity = 255;
    var scaleX = this._enemy.sideviewShadowScaleX();
    var scaleY = this._enemy.sideviewShadowScaleY();
    if (scaleX === 'auto') scaleX = this._mainSprite.bitmap.width / 9 / 64;
    if (scaleY === 'auto') scaleY = this._mainSprite.bitmap.width / 9 / 64;
    this._shadowSprite.scale.x = scaleX;
    this._shadowSprite.scale.y = scaleY;
};

Sprite_Enemy.prototype.updateMotion = function() {
    if (!this._svBattlerEnabled) return;
    this.setupMotion();
    this.setupWeaponAnimation();
    if (this._enemy.isMotionRefreshRequested()) {
      Sprite_Actor.prototype.refreshMotion.call(this);
      this._enemy.clearMotion();
    }
    this.updateMotionCount();
};

Sprite_Enemy.prototype.setupMotion = function() {
    if (!this._svBattlerEnabled) return;
    if (!this._enemy.isMotionRequested()) return;
    this.startMotion(this._enemy.motionType());
    this._enemy.clearMotion();
};

Sprite_Enemy.prototype.startMotion = function(motionType) {
    if (!this._svBattlerEnabled) return;
    var newMotion = Sprite_Actor.MOTIONS[motionType];
    if (this._motion === newMotion) return;
    this._motion = newMotion;
    this._motionCount = 0;
    this._pattern = 0;
};

Sprite_Enemy.prototype.setupWeaponAnimation = function() {
    if (!this._svBattlerEnabled) return;
    if (!this._enemy.isWeaponAnimationRequested()) return;
    this._weaponSprite.setup(this._enemy.weaponImageId());
    this._enemy.clearWeaponAnimation();
};

Sprite_Enemy.prototype.updateMotionCount = function() {
    if (!this._svBattlerEnabled) return;
    if (this._motion && ++this._motionCount >= this.motionSpeed()) {
      if (this._motion.loop) {
        this._pattern = (this._pattern + 1) % 4;
      } else if (this._pattern < 2) {
        this._pattern++;
      } else {
        this.refreshMotion();
      }
      this._motionCount = 0;
    }
};

Sprite_Enemy.prototype.refreshMotion = function() {
    if (!this._svBattlerEnabled) return;
    var enemy = this._enemy;
    if (!enemy) return;
    var stateMotion = enemy.stateMotionIndex();
    if (enemy.isInputting() || enemy.isActing()) {
        this.startMotion('walk');
    } else if (stateMotion === 3) {
        this.startMotion(enemy.deadMotion());
    } else if (stateMotion === 2) {
        this.startMotion(enemy.sleepMotion());
    } else if (enemy.isGuard() || enemy.isGuardWaiting()) {
        this.startMotion(enemy.guardMotion());
    } else if (stateMotion === 1) {
        this.startMotion(enemy.abnormalMotion());
    } else if (enemy.isDying()) {
        this.startMotion(enemy.dyingMotion());
    } else {
        this.startMotion(enemy.idleMotion());
    }
};

Sprite_Enemy.prototype.motionSpeed = function() {
    if (!this._enemy) return 12;
    return this._enemy.sideviewFrameSpeed() || 12;
};

Sprite_Enemy.prototype.updateSelectionEffect = function() {
    if (!this._svBattlerEnabled) {
      return Sprite_Battler.prototype.updateSelectionEffect.call(this);
    }
    var target = this._mainSprite;
    if (this._battler.isSelected()) {
        this._selectionEffectCount++;
        if (this._selectionEffectCount % 30 < 15) {
            target.setBlendColor([255, 255, 255, 64]);
        } else {
            target.setBlendColor([0, 0, 0, 0]);
        }
    } else if (this._selectionEffectCount > 0) {
        this._selectionEffectCount = 0;
        target.setBlendColor([0, 0, 0, 0]);
    }
};

Sprite_Enemy.prototype.isSideviewCollapse = function() {
    if (!this._svBattlerEnabled) return true;
    return this._enemy.sideviewCollapse();
};

Yanfly.SVE.Sprite_Enemy_updateCollapse = Sprite_Enemy.prototype.updateCollapse;
Sprite_Enemy.prototype.updateCollapse = function() {
    if (!this.isSideviewCollapse()) return;
    if (this._svBattlerEnabled) {
      this._mainSprite.blendMode = Graphics.BLEND_ADD;
      this._mainSprite.setBlendColor([255, 128, 128, 128]);
      this.opacity *= this._effectDuration / (this._effectDuration + 1);
    } else {
      Yanfly.SVE.Sprite_Enemy_updateCollapse.call(this);
    }
};

Yanfly.SVE.Sprite_Enemy_startBossCollapse =
    Sprite_Enemy.prototype.startBossCollapse;
Sprite_Enemy.prototype.startBossCollapse = function() {
    if (this._svBattlerEnabled) {
      this._effectDuration = Math.ceil(this._mainSprite.height * this.scale.y);
    this._appeared = false;
    } else {
      Yanfly.SVE.Sprite_Enemy_startBossCollapse.call(this);
    }
};

Yanfly.SVE.Sprite_Enemy_updateBossCollapse =
    Sprite_Enemy.prototype.updateBossCollapse;
Sprite_Enemy.prototype.updateBossCollapse = function() {
    if (!this.isSideviewCollapse()) return;
    if (this._svBattlerEnabled) {
      this._shake = this._effectDuration % 2 * 4 - 2;
      this._mainSprite.blendMode = Graphics.BLEND_ADD;
      this._mainSprite.setBlendColor([255, 255, 255, 255 - this.opacity]);
      this.opacity *= this._effectDuration / (this._effectDuration + 1);
      if (this._effectDuration % 20 === 19) {
        SoundManager.playBossCollapse2();
      }
    } else {
      Yanfly.SVE.Sprite_Enemy_updateBossCollapse.call(this);
    }
};

Yanfly.SVE.Sprite_Enemy_updateInstantCollapse =
    Sprite_Enemy.prototype.updateInstantCollapse;
Sprite_Enemy.prototype.updateInstantCollapse = function() {
    if (!this.isSideviewCollapse()) return;
    Yanfly.SVE.Sprite_Enemy_updateInstantCollapse.call(this);
};

//=============================================================================
// Sprite_StateIcon
//=============================================================================

Yanfly.SVE.Sprite_StateIcon_updateMirror =
    Sprite_StateIcon.prototype.updateMirror;
Sprite_StateIcon.prototype.updateMirror = function() {
    this.scale.x = 1 / Math.max(1 / 10000, Math.abs(this.parent.scale.x));
    this.scale.y = 1 / Math.max(1 / 10000, Math.abs(this.parent.scale.y));
    Yanfly.SVE.Sprite_StateIcon_updateMirror.call(this);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.getRandomElement = function(array) {
    var value = array[Math.floor(Math.random() * array.length)];
    return value;
};

//=============================================================================
// End of File
//=============================================================================
};
