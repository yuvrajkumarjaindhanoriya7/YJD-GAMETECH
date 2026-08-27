import * as THREE from 'three';

// Har ek item ke liye dedicated Three.js 3D Mesh generator function
function createProceduralAsset(itemValue) {
  const group = new THREE.Group();

  switch (itemValue) {
    // ==========================================
    // URBAN / STREET PROPS
    // ==========================================
    case 'street_lights': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 6, 16), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
      pole.position.y = 3;
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffffaa, emissive: 0xffffaa, emissiveIntensity: 1 }));
      lamp.position.set(0.6, 5.8, 0);
      const light = new THREE.PointLight(0xffffaa, 2, 10);
      light.position.set(0.6, 5.5, 0);
      group.add(pole, lamp, light);
      break;
    }
    case 'traffic_lights': {
      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.8, 0.6), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      housing.position.y = 4;
      const colors = [0xff0000, 0xffff00, 0x00ff00];
      colors.forEach((col, index) => {
        const lightMesh = new THREE.Mesh(new THREE.CircleGeometry(0.18, 16), new THREE.MeshBasicMaterial({ color: col }));
        lightMesh.position.set(0, 4.5 - index * 0.5, 0.31);
        group.add(lightMesh);
      });
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4, 12), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      pole.position.y = 2;
      group.add(housing, pole);
      break;
    }
    case 'benches': {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 0.8), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      seat.position.y = 0.5;
      const back = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.1), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      back.position.set(0, 0.8, -0.35);
      [-0.8, 0.8].forEach(x => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.7), new THREE.MeshStandardMaterial({ color: 0x222222 }));
        leg.position.set(x, 0.25, 0);
        group.add(leg);
      });
      group.add(seat, back);
      break;
    }
    case 'bus_stops': {
      const roof = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 2), new THREE.MeshStandardMaterial({ color: 0x444444 }));
      roof.position.y = 2.5;
      const glass = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2, 0.05), new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 }));
      glass.position.set(0, 1, -0.9);
      [-1.3, 1.3].forEach(x => {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.5), new THREE.MeshStandardMaterial({ color: 0x222222 }));
        pillar.position.set(x, 1.25, 0.9);
        group.add(pillar);
      });
      group.add(roof, glass);
      break;
    }
    case 'dumpsters': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.3, 1.3), new THREE.MeshStandardMaterial({ color: 0x1E4D2B, roughness: 0.5 }));
      body.position.y = 0.65;
      const lid = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.1, 1.35), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      lid.position.y = 1.35;
      group.add(body, lid);
      break;
    }
    case 'trash_cans': {
      const can = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.35, 0.9, 16), new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.6 }));
      can.position.y = 0.45;
      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.1, 16), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      lid.position.y = 0.95;
      group.add(can, lid);
      break;
    }
    case 'trash_bags': {
      const bag = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 }));
      bag.scale.set(1, 0.75, 1);
      bag.position.y = 0.25;
      group.add(bag);
      break;
    }
    case 'mailboxes': {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.8), new THREE.MeshStandardMaterial({ color: 0x003366 }));
      box.position.y = 1.3;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      post.position.y = 0.5;
      group.add(box, post);
      break;
    }
    case 'fire_hydrants': {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.8, 12), new THREE.MeshStandardMaterial({ color: 0xCC0000 }));
      body.position.y = 0.4;
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), new THREE.MeshStandardMaterial({ color: 0xCC0000 }));
      top.position.y = 0.8;
      group.add(body, top);
      break;
    }
    case 'barriers': {
      const fence = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1, 0.1), new THREE.MeshStandardMaterial({ color: 0xdddddd }));
      fence.position.y = 0.5;
      group.add(fence);
      break;
    }
    case 'cones': {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 16), new THREE.MeshStandardMaterial({ color: 0xff5500 }));
      cone.position.y = 0.4;
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.7), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      base.position.y = 0.025;
      group.add(cone, base);
      break;
    }
    case 'barricades': {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.6, 0.2), new THREE.MeshStandardMaterial({ color: 0xff6600 }));
      bar.position.y = 0.6;
      [-1, 1].forEach(x => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8), new THREE.MeshStandardMaterial({ color: 0x333333 }));
        leg.position.set(x, 0.3, 0);
        group.add(leg);
      });
      group.add(bar);
      break;
    }
    case 'manhole_covers': {
      const cover = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.05, 24), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
      cover.position.y = 0.025;
      group.add(cover);
      break;
    }
    case 'storm_drains': {
      const drain = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 1.2), new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9 }));
      drain.position.y = 0.025;
      group.add(drain);
      break;
    }
    case 'telephone_power_poles': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 8, 12), new THREE.MeshStandardMaterial({ color: 0x5C4033 }));
      pole.position.y = 4;
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.15, 0.15), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      bar.position.set(0, 7.2, 0);
      group.add(pole, bar);
      break;
    }
    case 'cables': {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3, 4, 0),
        new THREE.Vector3(0, 2.5, 0),
        new THREE.Vector3(3, 4, 0)
      ]);
      const cableGeo = new THREE.TubeGeometry(curve, 20, 0.03, 8, false);
      const cableMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      group.add(new THREE.Mesh(cableGeo, cableMat));
      break;
    }

    // ==========================================
    // TERRAIN & GROUND
    // ==========================================
    case 'ground_tiles___terrain_meshes': {
      const tile = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshStandardMaterial({ color: 0x3a5a40, wireframe: false }));
      tile.rotation.x = -Math.PI / 2;
      group.add(tile);
      break;
    }
    case 'cliff_faces': {
      const cliff = new THREE.Mesh(new THREE.BoxGeometry(6, 5, 2), new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 }));
      cliff.position.y = 2.5;
      group.add(cliff);
      break;
    }
    case 'rock_formations': {
      const rock1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), new THREE.MeshStandardMaterial({ color: 0x6c757d }));
      rock1.position.set(0, 0.8, 0);
      const rock2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 1), new THREE.MeshStandardMaterial({ color: 0x495057 }));
      rock2.position.set(0.8, 0.5, 0.4);
      group.add(rock1, rock2);
      break;
    }
    case 'sand_surface_variants': {
      const sand = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshStandardMaterial({ color: 0xdeb887, roughness: 0.9 }));
      sand.rotation.x = -Math.PI / 2;
      group.add(sand);
      break;
    }
    case 'mud_surface_variants': {
      const mud = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshStandardMaterial({ color: 0x4a3b32, roughness: 0.4 }));
      mud.rotation.x = -Math.PI / 2;
      group.add(mud);
      break;
    }
    case 'snow_surface_variants': {
      const snow = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshStandardMaterial({ color: 0xf8f9fa, roughness: 0.2 }));
      snow.rotation.x = -Math.PI / 2;
      group.add(snow);
      break;
    }
    case 'paths': {
      const path = new THREE.Mesh(new THREE.PlaneGeometry(3, 10), new THREE.MeshStandardMaterial({ color: 0xd3a373 }));
      path.rotation.x = -Math.PI / 2;
      path.position.y = 0.01;
      group.add(path);
      break;
    }
    case 'roads': {
      const road = new THREE.Mesh(new THREE.PlaneGeometry(6, 12), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      road.rotation.x = -Math.PI / 2;
      road.position.y = 0.01;
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 12), new THREE.MeshBasicMaterial({ color: 0xffcc00 }));
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.y = 0.02;
      group.add(road, stripe);
      break;
    }
    case 'dirt_tracks': {
      const track = new THREE.Mesh(new THREE.PlaneGeometry(4, 10), new THREE.MeshStandardMaterial({ color: 0x6e473b, roughness: 1 }));
      track.rotation.x = -Math.PI / 2;
      track.position.y = 0.01;
      group.add(track);
      break;
    }

    // ==========================================
    // VEGETATION
    // ==========================================
    case 'trees__oak__pine__palm__dead_': {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 2.5, 8), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      trunk.position.y = 1.25;
      const foliage = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3.5, 8), new THREE.MeshStandardMaterial({ color: 0x2d6a4f }));
      foliage.position.y = 3.5;
      group.add(trunk, foliage);
      break;
    }
    case 'bushes': {
      const bush = new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 12), new THREE.MeshStandardMaterial({ color: 0x40916c, roughness: 0.8 }));
      bush.scale.set(1.2, 0.8, 1);
      bush.position.y = 0.6;
      group.add(bush);
      break;
    }
    case 'shrubs': {
      const shrub = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), new THREE.MeshStandardMaterial({ color: 0x52b788 }));
      shrub.position.y = 0.5;
      group.add(shrub);
      break;
    }
    case 'hedges': {
      const hedge = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 0.8), new THREE.MeshStandardMaterial({ color: 0x1b4332 }));
      hedge.position.y = 0.6;
      group.add(hedge);
      break;
    }
    case 'grass_clumps': {
      for(let i = 0; i < 5; i++) {
        const blade = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.6, 4), new THREE.MeshStandardMaterial({ color: 0x74c69d }));
        blade.position.set((Math.random()-0.5)*0.3, 0.3, (Math.random()-0.5)*0.3);
        blade.rotation.z = (Math.random()-0.5)*0.3;
        group.add(blade);
      }
      break;
    }
    case 'flowers': {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5), new THREE.MeshStandardMaterial({ color: 0x2d6a4f }));
      stem.position.y = 0.25;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshStandardMaterial({ color: 0xff4d6d }));
      petal.position.y = 0.5;
      group.add(stem, petal);
      break;
    }
    case 'weeds': {
      const weed = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 5), new THREE.MeshStandardMaterial({ color: 0x80b918 }));
      weed.position.y = 0.25;
      group.add(weed);
      break;
    }
    case 'vines_overlays':
    case 'ivy_overlays':
    case 'moss_overlays': {
      const patch = new THREE.Mesh(new THREE.PlaneGeometry(1, 2), new THREE.MeshStandardMaterial({ color: 0x38b000, transparent: true, opacity: 0.8 }));
      patch.position.set(0, 1, 0.01);
      group.add(patch);
      break;
    }
    case 'lily_pads': {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.02, 16), new THREE.MeshStandardMaterial({ color: 0x38b000 }));
      pad.position.y = 0.01;
      group.add(pad);
      break;
    }
    case 'reeds':
    case 'cattails': {
      const reed = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.5), new THREE.MeshStandardMaterial({ color: 0x556b2f }));
      reed.position.y = 0.75;
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3), new THREE.MeshStandardMaterial({ color: 0x4a2c11 }));
      top.position.y = 1.3;
      group.add(reed, top);
      break;
    }

    // ==========================================
    // STRUCTURES & ARCHITECTURE
    // ==========================================
    case 'buildings': {
      const bldg = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), new THREE.MeshStandardMaterial({ color: 0x999999 }));
      bldg.position.y = 3;
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.8, 0.1), new THREE.MeshStandardMaterial({ color: 0x4a2c11 }));
      door.position.set(0, 0.9, 2.01);
      group.add(bldg, door);
      break;
    }
    case 'walls': {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(4, 2.5, 0.3), new THREE.MeshStandardMaterial({ color: 0x777777 }));
      wall.position.y = 1.25;
      group.add(wall);
      break;
    }
    case 'fences': {
      const fence = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 0.05), new THREE.MeshStandardMaterial({ color: 0xa3b18a }));
      fence.position.y = 0.6;
      group.add(fence);
      break;
    }
    case 'gates': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 0.1), new THREE.MeshStandardMaterial({ color: 0x222222, wireframe: true }));
      frame.position.y = 1;
      group.add(frame);
      break;
    }
    case 'bridges': {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 2), new THREE.MeshStandardMaterial({ color: 0x666666 }));
      arch.position.y = 1.5;
      group.add(arch);
      break;
    }
    case 'staircases': {
      for (let i = 0; i < 5; i++) {
        const step = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.2, 0.4), new THREE.MeshStandardMaterial({ color: 0x888888 }));
        step.position.set(0, i * 0.2 + 0.1, i * 0.3);
        group.add(step);
      }
      break;
    }
    case 'ladders': {
      [-0.3, 0.3].forEach(x => {
        const side = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3), new THREE.MeshStandardMaterial({ color: 0xb5651d }));
        side.position.set(x, 1.5, 0);
        group.add(side);
      });
      for(let y = 0.3; y < 3; y += 0.4) {
        const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6), new THREE.MeshStandardMaterial({ color: 0xb5651d }));
        rung.rotation.z = Math.PI / 2;
        rung.position.set(0, y, 0);
        group.add(rung);
      }
      break;
    }
    case 'ruins':
    case 'rubble_piles': {
      for (let i = 0; i < 6; i++) {
        const chunk = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3 + Math.random()*0.3), new THREE.MeshStandardMaterial({ color: 0x777777 }));
        chunk.position.set((Math.random()-0.5)*1.2, 0.2, (Math.random()-0.5)*1.2);
        group.add(chunk);
      }
      break;
    }
    case 'pillars': {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 4, 16), new THREE.MeshStandardMaterial({ color: 0xe0e0e0 }));
      pillar.position.y = 2;
      group.add(pillar);
      break;
    }
    case 'arches': {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.2, 8, 24, Math.PI), new THREE.MeshStandardMaterial({ color: 0xd3d3d3 }));
      ring.position.y = 2;
      group.add(ring);
      break;
    }
    case 'doorways': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.4, 0.2), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      frame.position.y = 1.2;
      group.add(frame);
      break;
    }

    // ==========================================
    // INTERIOR / INDOOR PROPS
    // ==========================================
    case 'tables':
    case 'desks': {
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.9), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      top.position.y = 0.75;
      [[-0.7, -0.35], [0.7, -0.35], [-0.7, 0.35], [0.7, 0.35]].forEach(([x, z]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.75), new THREE.MeshStandardMaterial({ color: 0x333333 }));
        leg.position.set(x, 0.375, z);
        group.add(leg);
      });
      group.add(top);
      break;
    }
    case 'chairs': {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.5), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      seat.position.y = 0.45;
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.05), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      back.position.set(0, 0.7, -0.225);
      group.add(seat, back);
      break;
    }
    case 'sofas': {
      const base = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 0.9), new THREE.MeshStandardMaterial({ color: 0x2b2d42 }));
      base.position.y = 0.2;
      const back = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.25), new THREE.MeshStandardMaterial({ color: 0x2b2d42 }));
      back.position.set(0, 0.5, -0.325);
      group.add(base, back);
      break;
    }
    case 'shelves':
    case 'cabinets':
    case 'lockers': {
      const cabinet = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 0.5), new THREE.MeshStandardMaterial({ color: 0x4a5568 }));
      cabinet.position.y = 1;
      group.add(cabinet);
      break;
    }
    case 'beds':
    case 'mattresses': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.3, 2), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      frame.position.y = 0.15;
      const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.25, 1.9), new THREE.MeshStandardMaterial({ color: 0xedf2f7 }));
      mattress.position.y = 0.425;
      group.add(frame, mattress);
      break;
    }
    case 'computers':
    case 'monitors':
    case 'tv_sets': {
      const screen = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.55, 0.05), new THREE.MeshStandardMaterial({ color: 0x1a202c }));
      screen.position.y = 0.5;
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 0.2), new THREE.MeshStandardMaterial({ color: 0x718096 }));
      stand.position.y = 0.1;
      group.add(screen, stand);
      break;
    }
    case 'books': {
      const book = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, 0.05), new THREE.MeshStandardMaterial({ color: 0x9b2c2c }));
      book.position.y = 0.125;
      group.add(book);
      break;
    }
    case 'boxes':
    case 'crates': {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), new THREE.MeshStandardMaterial({ color: 0xdd6b20, roughness: 0.8 }));
      crate.position.y = 0.4;
      group.add(crate);
      break;
    }
    case 'curtains': {
      const curtain = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.5), new THREE.MeshStandardMaterial({ color: 0x7b2cbf, side: THREE.DoubleSide }));
      curtain.position.y = 1.25;
      group.add(curtain);
      break;
    }
    case 'rugs': {
      const rug = new THREE.Mesh(new THREE.PlaneGeometry(2, 3), new THREE.MeshStandardMaterial({ color: 0x9b5de5 }));
      rug.rotation.x = -Math.PI / 2;
      rug.position.y = 0.005;
      group.add(rug);
      break;
    }
    case 'paintings': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 0.04), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      frame.position.y = 1.5;
      group.add(frame);
      break;
    }

    // ==========================================
    // INDUSTRIAL / MILITARY
    // ==========================================
    case 'shipping_containers': {
      const container = new THREE.Mesh(new THREE.BoxGeometry(6, 2.4, 2.4), new THREE.MeshStandardMaterial({ color: 0x9b2c2c, metalness: 0.5 }));
      container.position.y = 1.2;
      group.add(container);
      break;
    }
    case 'oil_drums': {
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 20), new THREE.MeshStandardMaterial({ color: 0x2b6cb0, metalness: 0.7 }));
      drum.position.y = 0.6;
      group.add(drum);
      break;
    }
    case 'fuel_tanks': {
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 16), new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8 }));
      tank.rotation.z = Math.PI / 2;
      tank.position.y = 1;
      group.add(tank);
      break;
    }
    case 'generators':
    case 'transformers': {
      const gen = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xd69e2e, metalness: 0.6 }));
      gen.position.y = 0.6;
      group.add(gen);
      break;
    }
    case 'forklifts':
    case 'cranes':
    case 'machinery': {
      const base = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xd69e2e }));
      base.position.y = 0.6;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2, 0.2), new THREE.MeshStandardMaterial({ color: 0x1a202c }));
      arm.position.set(0.8, 1.5, 0);
      group.add(base, arm);
      break;
    }
    case 'sandbags': {
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 0.35), new THREE.MeshStandardMaterial({ color: 0xc6f6d5, roughness: 0.9 }));
      bag.position.y = 0.125;
      group.add(bag);
      break;
    }
    case 'barbed_wire': {
      const wire = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.02, 8, 24), new THREE.MeshStandardMaterial({ color: 0x718096, metalness: 0.9 }));
      wire.position.y = 0.4;
      group.add(wire);
      break;
    }
    case 'watchtowers': {
      [-0.8, 0.8].forEach(x => {
        [-0.8, 0.8].forEach(z => {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 4), new THREE.MeshStandardMaterial({ color: 0x4a5568 }));
          leg.position.set(x, 2, z);
          group.add(leg);
        });
      });
      const top = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 2), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
      top.position.y = 4.5;
      group.add(top);
      break;
    }
    case 'bunkers': {
      const bunker = new THREE.Mesh(new THREE.BoxGeometry(3, 1.5, 3), new THREE.MeshStandardMaterial({ color: 0x4a5568, roughness: 0.9 }));
      bunker.position.y = 0.75;
      group.add(bunker);
      break;
    }

    // ==========================================
    // WATER & LIQUID
    // ==========================================
    case 'water_planes___ocean_meshes':
    case 'rivers__spline_based_':
    case 'streams__spline_based_': {
      const water = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ color: 0x3182ce, transparent: true, opacity: 0.75, roughness: 0.1 }));
      water.rotation.x = -Math.PI / 2;
      group.add(water);
      break;
    }
    case 'puddles': {
      const puddle = new THREE.Mesh(new THREE.CircleGeometry(1.2, 16), new THREE.MeshStandardMaterial({ color: 0x2b6cb0, roughness: 0.1 }));
      puddle.rotation.x = -Math.PI / 2;
      puddle.position.y = 0.01;
      group.add(puddle);
      break;
    }
    case 'mud_patches': {
      const patch = new THREE.Mesh(new THREE.CircleGeometry(1.5, 16), new THREE.MeshStandardMaterial({ color: 0x52392f, roughness: 0.8 }));
      patch.rotation.x = -Math.PI / 2;
      patch.position.y = 0.01;
      group.add(patch);
      break;
    }
    case 'waterfalls': {
      const fall = new THREE.Mesh(new THREE.PlaneGeometry(2, 5), new THREE.MeshStandardMaterial({ color: 0x63b3ed, transparent: true, opacity: 0.8 }));
      fall.position.y = 2.5;
      group.add(fall);
      break;
    }

    // ==========================================
    // LIGHTING PROPS
    // ==========================================
    case 'lanterns':
    case 'torches':
    case 'candles': {
      const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 12), new THREE.MeshStandardMaterial({ color: 0xfffaf0 }));
      candle.position.y = 0.2;
      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff6600 }));
      flame.position.y = 0.42;
      group.add(candle, flame);
      break;
    }
    case 'spotlights':
    case 'flood_lights': {
      const lightBody = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.15, 0.5, 12), new THREE.MeshStandardMaterial({ color: 0x2d3748, metalness: 0.8 }));
      lightBody.rotation.x = Math.PI / 4;
      lightBody.position.y = 1;
      group.add(lightBody);
      break;
    }
    case 'neon_signs':
    case 'billboard_lights': {
      const sign = new THREE.Mesh(new THREE.BoxGeometry(2, 0.8, 0.1), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x00f0ff, emissiveIntensity: 0.8 }));
      sign.position.y = 2;
      group.add(sign);
      break;
    }
    case 'glowing_embers':
    case 'fire_pits': {
      const pit = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 0.3, 12), new THREE.MeshStandardMaterial({ color: 0x1a202c }));
      pit.position.y = 0.15;
      const ember = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), new THREE.MeshStandardMaterial({ color: 0xff4500, emissive: 0xff4500 }));
      ember.position.y = 0.2;
      group.add(pit, ember);
      break;
    }

    // ==========================================
    // ATMOSPHERIC / FX
    // ==========================================
    case 'particle_systems__fog__dust__smoke_': {
      const particleGeo = new THREE.BufferGeometry();
      const count = 50;
      const posArray = new Float32Array(count * 3);
      for(let i=0; i<count*3; i++) { posArray[i] = (Math.random() - 0.5) * 3; }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particleMat = new THREE.PointsMaterial({ size: 0.05, color: 0xcccccc, transparent: true, opacity: 0.6 });
      const particles = new THREE.Points(particleGeo, particleMat);
      particles.position.y = 1;
      group.add(particles);
      break;
    }
    case 'decals__cracks__stains__graffiti_': {
      const decal = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.7 }));
      decal.rotation.x = -Math.PI / 2;
      decal.position.y = 0.005;
      group.add(decal);
      break;
    }
    case 'skyboxes___sky_domes': {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(8, 16, 16), new THREE.MeshBasicMaterial({ color: 0x63b3ed, side: THREE.BackSide }));
      group.add(dome);
      break;
    }
    case 'ambient_occlusion_baked_meshes': {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xa0aec0, roughness: 0.5 }));
      mesh.position.y = 0.5;
      group.add(mesh);
      break;
    }

    // ==========================================
    // VEHICLES (STATIC)
    // ==========================================
    case 'abandoned_cars': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.9, 1.6), new THREE.MeshStandardMaterial({ color: 0xc53030, roughness: 0.8 }));
      body.position.y = 0.45;
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 1.4), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
      cabin.position.set(-0.2, 1.25, 0);
      group.add(body, cabin);
      break;
    }
    case 'trucks': {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.8, 1.8), new THREE.MeshStandardMaterial({ color: 0x2b6cb0 }));
      cab.position.set(1.5, 0.9, 0);
      const trailer = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.2, 1.8), new THREE.MeshStandardMaterial({ color: 0xedf2f7 }));
      trailer.position.set(-1, 1.1, 0);
      group.add(cab, trailer);
      break;
    }
    case 'buses': {
      const bus = new THREE.Mesh(new THREE.BoxGeometry(6, 2.2, 2), new THREE.MeshStandardMaterial({ color: 0xd69e2e }));
      bus.position.y = 1.1;
      group.add(bus);
      break;
    }
    case 'boats': {
      const hull = new THREE.Mesh(new THREE.ConeGeometry(1.2, 4, 4), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      hull.rotation.x = Math.PI / 2;
      hull.rotation.z = Math.PI / 2;
      hull.position.y = 0.3;
      group.add(hull);
      break;
    }
    case 'planes': {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 5, 12), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
      body.rotation.z = Math.PI / 2;
      body.position.y = 1;
      const wings = new THREE.Mesh(new THREE.BoxGeometry(1, 0.05, 5), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
      wings.position.set(0.5, 1, 0);
      group.add(body, wings);
      break;
    }
    case 'wreckage_pieces': {
      const piece = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7), new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.8 }));
      piece.position.y = 0.35;
      group.add(piece);
      break;
    }

    // ==========================================
    // SIGNAGE
    // ==========================================
    case 'road_signs':
    case 'warning_signs': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2), new THREE.MeshStandardMaterial({ color: 0x718096 }));
      pole.position.y = 1.1;
      const sign = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.03), new THREE.MeshStandardMaterial({ color: 0xd69e2e }));
      sign.position.set(0, 1.8, 0);
      sign.rotation.z = Math.PI / 4;
      group.add(pole, sign);
      break;
    }
    case 'billboards': {
      const board = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 0.1), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      board.position.y = 3.5;
      [-1.5, 1.5].forEach(x => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
        leg.position.set(x, 1.5, 0);
        group.add(leg);
      });
      group.add(board);
      break;
    }
    case 'posters':
    case 'shop_signs':
    case 'graffiti_text': {
      const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.2), new THREE.MeshBasicMaterial({ color: 0xe53e3e, side: THREE.DoubleSide }));
      poster.position.y = 1;
      group.add(poster);
      break;
    }

    // ==========================================
    // MODULAR KIT PIECES
    // ==========================================
    case 'wall_segments':
    case 'structural_walls': {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      wall.position.y = 1.5;
      group.add(wall);
      break;
    }
    case 'floor_tiles': {
      const floor = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 2), new THREE.MeshStandardMaterial({ color: 0xa0aec0 }));
      floor.position.y = 0.05;
      group.add(floor);
      break;
    }
    case 'ceiling_panels': {
      const ceiling = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 2), new THREE.MeshStandardMaterial({ color: 0xedf2f7 }));
      ceiling.position.y = 3;
      group.add(ceiling);
      break;
    }
    case 'corner_pieces': {
      const w1 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      w1.position.set(0.4, 1.5, 0);
      const w2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 1), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      w2.position.set(0, 1.5, 0.4);
      group.add(w1, w2);
      break;
    }
    case 't_junctions': {
      const mainW = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      mainW.position.y = 1.5;
      const subW = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 1), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      subW.position.set(0, 1.5, 0.5);
      group.add(mainW, subW);
      break;
    }
    case 'doorframes': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, 0.2), new THREE.MeshStandardMaterial({ color: 0x718096, wireframe: true }));
      frame.position.y = 1.1;
      group.add(frame);
      break;
    }
    case 'window_frames': {
      const win = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.1), new THREE.MeshStandardMaterial({ color: 0x81e6d9, transparent: true, opacity: 0.5 }));
      win.position.y = 1.5;
      group.add(win);
      break;
    }
    case 'trim':
    case 'molding':
    case 'baseboards': {
      const baseboard = new THREE.Mesh(new THREE.BoxGeometry(2, 0.15, 0.05), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
      baseboard.position.y = 0.075;
      group.add(baseboard);
      break;
    }
    case 'dwg_imports': {
      const grid = new THREE.GridHelper(4, 8, 0x0000ff, 0x888888);
      grid.position.y = 0.01;
      group.add(grid);
      break;
    }

    default: {
      const fallback = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), new THREE.MeshStandardMaterial({ color: 0x3182ce }));
      fallback.position.y = 0.5;
      group.add(fallback);
      break;
    }
  }

  return group;
}
import * as THREE from 'three';

// Har ek item ke liye dedicated Three.js 3D Mesh generator function
function createProceduralAsset(itemValue) {
  const group = new THREE.Group();

  switch (itemValue) {
    // ==========================================
    // URBAN / STREET PROPS
    // ==========================================
    case 'street_lights': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 6, 16), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
      pole.position.y = 3;
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffffaa, emissive: 0xffffaa, emissiveIntensity: 1 }));
      lamp.position.set(0.6, 5.8, 0);
      const light = new THREE.PointLight(0xffffaa, 2, 10);
      light.position.set(0.6, 5.5, 0);
      group.add(pole, lamp, light);
      break;
    }
    case 'traffic_lights': {
      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.8, 0.6), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      housing.position.y = 4;
      const colors = [0xff0000, 0xffff00, 0x00ff00];
      colors.forEach((col, index) => {
        const lightMesh = new THREE.Mesh(new THREE.CircleGeometry(0.18, 16), new THREE.MeshBasicMaterial({ color: col }));
        lightMesh.position.set(0, 4.5 - index * 0.5, 0.31);
        group.add(lightMesh);
      });
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4, 12), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      pole.position.y = 2;
      group.add(housing, pole);
      break;
    }
    case 'benches': {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 0.8), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      seat.position.y = 0.5;
      const back = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.1), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      back.position.set(0, 0.8, -0.35);
      [-0.8, 0.8].forEach(x => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.7), new THREE.MeshStandardMaterial({ color: 0x222222 }));
        leg.position.set(x, 0.25, 0);
        group.add(leg);
      });
      group.add(seat, back);
      break;
    }
    case 'bus_stops': {
      const roof = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 2), new THREE.MeshStandardMaterial({ color: 0x444444 }));
      roof.position.y = 2.5;
      const glass = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2, 0.05), new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 }));
      glass.position.set(0, 1, -0.9);
      [-1.3, 1.3].forEach(x => {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.5), new THREE.MeshStandardMaterial({ color: 0x222222 }));
        pillar.position.set(x, 1.25, 0.9);
        group.add(pillar);
      });
      group.add(roof, glass);
      break;
    }
    case 'dumpsters': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.3, 1.3), new THREE.MeshStandardMaterial({ color: 0x1E4D2B, roughness: 0.5 }));
      body.position.y = 0.65;
      const lid = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.1, 1.35), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      lid.position.y = 1.35;
      group.add(body, lid);
      break;
    }
    case 'trash_cans': {
      const can = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.35, 0.9, 16), new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.6 }));
      can.position.y = 0.45;
      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.1, 16), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      lid.position.y = 0.95;
      group.add(can, lid);
      break;
    }
    case 'trash_bags': {
      const bag = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 }));
      bag.scale.set(1, 0.75, 1);
      bag.position.y = 0.25;
      group.add(bag);
      break;
    }
    case 'mailboxes': {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.8), new THREE.MeshStandardMaterial({ color: 0x003366 }));
      box.position.y = 1.3;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      post.position.y = 0.5;
      group.add(box, post);
      break;
    }
    case 'fire_hydrants': {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.8, 12), new THREE.MeshStandardMaterial({ color: 0xCC0000 }));
      body.position.y = 0.4;
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), new THREE.MeshStandardMaterial({ color: 0xCC0000 }));
      top.position.y = 0.8;
      group.add(body, top);
      break;
    }
    case 'barriers': {
      const fence = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1, 0.1), new THREE.MeshStandardMaterial({ color: 0xdddddd }));
      fence.position.y = 0.5;
      group.add(fence);
      break;
    }
    case 'cones': {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 16), new THREE.MeshStandardMaterial({ color: 0xff5500 }));
      cone.position.y = 0.4;
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.7), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      base.position.y = 0.025;
      group.add(cone, base);
      break;
    }
    case 'barricades': {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.6, 0.2), new THREE.MeshStandardMaterial({ color: 0xff6600 }));
      bar.position.y = 0.6;
      [-1, 1].forEach(x => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8), new THREE.MeshStandardMaterial({ color: 0x333333 }));
        leg.position.set(x, 0.3, 0);
        group.add(leg);
      });
      group.add(bar);
      break;
    }
    case 'manhole_covers': {
      const cover = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.05, 24), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
      cover.position.y = 0.025;
      group.add(cover);
      break;
    }
    case 'storm_drains': {
      const drain = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 1.2), new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9 }));
      drain.position.y = 0.025;
      group.add(drain);
      break;
    }
    case 'telephone_power_poles': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 8, 12), new THREE.MeshStandardMaterial({ color: 0x5C4033 }));
      pole.position.y = 4;
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.15, 0.15), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      bar.position.set(0, 7.2, 0);
      group.add(pole, bar);
      break;
    }
    case 'cables': {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3, 4, 0),
        new THREE.Vector3(0, 2.5, 0),
        new THREE.Vector3(3, 4, 0)
      ]);
      const cableGeo = new THREE.TubeGeometry(curve, 20, 0.03, 8, false);
      const cableMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      group.add(new THREE.Mesh(cableGeo, cableMat));
      break;
    }

    // ==========================================
    // TERRAIN & GROUND
    // ==========================================
    case 'ground_tiles___terrain_meshes': {
      const tile = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshStandardMaterial({ color: 0x3a5a40, wireframe: false }));
      tile.rotation.x = -Math.PI / 2;
      group.add(tile);
      break;
    }
    case 'cliff_faces': {
      const cliff = new THREE.Mesh(new THREE.BoxGeometry(6, 5, 2), new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 }));
      cliff.position.y = 2.5;
      group.add(cliff);
      break;
    }
    case 'rock_formations': {
      const rock1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), new THREE.MeshStandardMaterial({ color: 0x6c757d }));
      rock1.position.set(0, 0.8, 0);
      const rock2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 1), new THREE.MeshStandardMaterial({ color: 0x495057 }));
      rock2.position.set(0.8, 0.5, 0.4);
      group.add(rock1, rock2);
      break;
    }
    case 'sand_surface_variants': {
      const sand = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshStandardMaterial({ color: 0xdeb887, roughness: 0.9 }));
      sand.rotation.x = -Math.PI / 2;
      group.add(sand);
      break;
    }
    case 'mud_surface_variants': {
      const mud = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshStandardMaterial({ color: 0x4a3b32, roughness: 0.4 }));
      mud.rotation.x = -Math.PI / 2;
      group.add(mud);
      break;
    }
    case 'snow_surface_variants': {
      const snow = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshStandardMaterial({ color: 0xf8f9fa, roughness: 0.2 }));
      snow.rotation.x = -Math.PI / 2;
      group.add(snow);
      break;
    }
    case 'paths': {
      const path = new THREE.Mesh(new THREE.PlaneGeometry(3, 10), new THREE.MeshStandardMaterial({ color: 0xd3a373 }));
      path.rotation.x = -Math.PI / 2;
      path.position.y = 0.01;
      group.add(path);
      break;
    }
    case 'roads': {
      const road = new THREE.Mesh(new THREE.PlaneGeometry(6, 12), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      road.rotation.x = -Math.PI / 2;
      road.position.y = 0.01;
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 12), new THREE.MeshBasicMaterial({ color: 0xffcc00 }));
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.y = 0.02;
      group.add(road, stripe);
      break;
    }
    case 'dirt_tracks': {
      const track = new THREE.Mesh(new THREE.PlaneGeometry(4, 10), new THREE.MeshStandardMaterial({ color: 0x6e473b, roughness: 1 }));
      track.rotation.x = -Math.PI / 2;
      track.position.y = 0.01;
      group.add(track);
      break;
    }

    // ==========================================
    // VEGETATION
    // ==========================================
    case 'trees__oak__pine__palm__dead_': {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 2.5, 8), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      trunk.position.y = 1.25;
      const foliage = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3.5, 8), new THREE.MeshStandardMaterial({ color: 0x2d6a4f }));
      foliage.position.y = 3.5;
      group.add(trunk, foliage);
      break;
    }
    case 'bushes': {
      const bush = new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 12), new THREE.MeshStandardMaterial({ color: 0x40916c, roughness: 0.8 }));
      bush.scale.set(1.2, 0.8, 1);
      bush.position.y = 0.6;
      group.add(bush);
      break;
    }
    case 'shrubs': {
      const shrub = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), new THREE.MeshStandardMaterial({ color: 0x52b788 }));
      shrub.position.y = 0.5;
      group.add(shrub);
      break;
    }
    case 'hedges': {
      const hedge = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 0.8), new THREE.MeshStandardMaterial({ color: 0x1b4332 }));
      hedge.position.y = 0.6;
      group.add(hedge);
      break;
    }
    case 'grass_clumps': {
      for(let i = 0; i < 5; i++) {
        const blade = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.6, 4), new THREE.MeshStandardMaterial({ color: 0x74c69d }));
        blade.position.set((Math.random()-0.5)*0.3, 0.3, (Math.random()-0.5)*0.3);
        blade.rotation.z = (Math.random()-0.5)*0.3;
        group.add(blade);
      }
      break;
    }
    case 'flowers': {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5), new THREE.MeshStandardMaterial({ color: 0x2d6a4f }));
      stem.position.y = 0.25;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshStandardMaterial({ color: 0xff4d6d }));
      petal.position.y = 0.5;
      group.add(stem, petal);
      break;
    }
    case 'weeds': {
      const weed = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 5), new THREE.MeshStandardMaterial({ color: 0x80b918 }));
      weed.position.y = 0.25;
      group.add(weed);
      break;
    }
    case 'vines_overlays':
    case 'ivy_overlays':
    case 'moss_overlays': {
      const patch = new THREE.Mesh(new THREE.PlaneGeometry(1, 2), new THREE.MeshStandardMaterial({ color: 0x38b000, transparent: true, opacity: 0.8 }));
      patch.position.set(0, 1, 0.01);
      group.add(patch);
      break;
    }
    case 'lily_pads': {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.02, 16), new THREE.MeshStandardMaterial({ color: 0x38b000 }));
      pad.position.y = 0.01;
      group.add(pad);
      break;
    }
    case 'reeds':
    case 'cattails': {
      const reed = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.5), new THREE.MeshStandardMaterial({ color: 0x556b2f }));
      reed.position.y = 0.75;
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3), new THREE.MeshStandardMaterial({ color: 0x4a2c11 }));
      top.position.y = 1.3;
      group.add(reed, top);
      break;
    }

    // ==========================================
    // STRUCTURES & ARCHITECTURE
    // ==========================================
    case 'buildings': {
      const bldg = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), new THREE.MeshStandardMaterial({ color: 0x999999 }));
      bldg.position.y = 3;
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.8, 0.1), new THREE.MeshStandardMaterial({ color: 0x4a2c11 }));
      door.position.set(0, 0.9, 2.01);
      group.add(bldg, door);
      break;
    }
    case 'walls': {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(4, 2.5, 0.3), new THREE.MeshStandardMaterial({ color: 0x777777 }));
      wall.position.y = 1.25;
      group.add(wall);
      break;
    }
    case 'fences': {
      const fence = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 0.05), new THREE.MeshStandardMaterial({ color: 0xa3b18a }));
      fence.position.y = 0.6;
      group.add(fence);
      break;
    }
    case 'gates': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 0.1), new THREE.MeshStandardMaterial({ color: 0x222222, wireframe: true }));
      frame.position.y = 1;
      group.add(frame);
      break;
    }
    case 'bridges': {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 2), new THREE.MeshStandardMaterial({ color: 0x666666 }));
      arch.position.y = 1.5;
      group.add(arch);
      break;
    }
    case 'staircases': {
      for (let i = 0; i < 5; i++) {
        const step = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.2, 0.4), new THREE.MeshStandardMaterial({ color: 0x888888 }));
        step.position.set(0, i * 0.2 + 0.1, i * 0.3);
        group.add(step);
      }
      break;
    }
    case 'ladders': {
      [-0.3, 0.3].forEach(x => {
        const side = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3), new THREE.MeshStandardMaterial({ color: 0xb5651d }));
        side.position.set(x, 1.5, 0);
        group.add(side);
      });
      for(let y = 0.3; y < 3; y += 0.4) {
        const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6), new THREE.MeshStandardMaterial({ color: 0xb5651d }));
        rung.rotation.z = Math.PI / 2;
        rung.position.set(0, y, 0);
        group.add(rung);
      }
      break;
    }
    case 'ruins':
    case 'rubble_piles': {
      for (let i = 0; i < 6; i++) {
        const chunk = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3 + Math.random()*0.3), new THREE.MeshStandardMaterial({ color: 0x777777 }));
        chunk.position.set((Math.random()-0.5)*1.2, 0.2, (Math.random()-0.5)*1.2);
        group.add(chunk);
      }
      break;
    }
    case 'pillars': {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 4, 16), new THREE.MeshStandardMaterial({ color: 0xe0e0e0 }));
      pillar.position.y = 2;
      group.add(pillar);
      break;
    }
    case 'arches': {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.2, 8, 24, Math.PI), new THREE.MeshStandardMaterial({ color: 0xd3d3d3 }));
      ring.position.y = 2;
      group.add(ring);
      break;
    }
    case 'doorways': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.4, 0.2), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      frame.position.y = 1.2;
      group.add(frame);
      break;
    }

    // ==========================================
    // INTERIOR / INDOOR PROPS
    // ==========================================
    case 'tables':
    case 'desks': {
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.9), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      top.position.y = 0.75;
      [[-0.7, -0.35], [0.7, -0.35], [-0.7, 0.35], [0.7, 0.35]].forEach(([x, z]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.75), new THREE.MeshStandardMaterial({ color: 0x333333 }));
        leg.position.set(x, 0.375, z);
        group.add(leg);
      });
      group.add(top);
      break;
    }
    case 'chairs': {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.5), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      seat.position.y = 0.45;
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.05), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      back.position.set(0, 0.7, -0.225);
      group.add(seat, back);
      break;
    }
    case 'sofas': {
      const base = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 0.9), new THREE.MeshStandardMaterial({ color: 0x2b2d42 }));
      base.position.y = 0.2;
      const back = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.25), new THREE.MeshStandardMaterial({ color: 0x2b2d42 }));
      back.position.set(0, 0.5, -0.325);
      group.add(base, back);
      break;
    }
    case 'shelves':
    case 'cabinets':
    case 'lockers': {
      const cabinet = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 0.5), new THREE.MeshStandardMaterial({ color: 0x4a5568 }));
      cabinet.position.y = 1;
      group.add(cabinet);
      break;
    }
    case 'beds':
    case 'mattresses': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.3, 2), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      frame.position.y = 0.15;
      const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.25, 1.9), new THREE.MeshStandardMaterial({ color: 0xedf2f7 }));
      mattress.position.y = 0.425;
      group.add(frame, mattress);
      break;
    }
    case 'computers':
    case 'monitors':
    case 'tv_sets': {
      const screen = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.55, 0.05), new THREE.MeshStandardMaterial({ color: 0x1a202c }));
      screen.position.y = 0.5;
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 0.2), new THREE.MeshStandardMaterial({ color: 0x718096 }));
      stand.position.y = 0.1;
      group.add(screen, stand);
      break;
    }
    case 'books': {
      const book = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, 0.05), new THREE.MeshStandardMaterial({ color: 0x9b2c2c }));
      book.position.y = 0.125;
      group.add(book);
      break;
    }
    case 'boxes':
    case 'crates': {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), new THREE.MeshStandardMaterial({ color: 0xdd6b20, roughness: 0.8 }));
      crate.position.y = 0.4;
      group.add(crate);
      break;
    }
    case 'curtains': {
      const curtain = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.5), new THREE.MeshStandardMaterial({ color: 0x7b2cbf, side: THREE.DoubleSide }));
      curtain.position.y = 1.25;
      group.add(curtain);
      break;
    }
    case 'rugs': {
      const rug = new THREE.Mesh(new THREE.PlaneGeometry(2, 3), new THREE.MeshStandardMaterial({ color: 0x9b5de5 }));
      rug.rotation.x = -Math.PI / 2;
      rug.position.y = 0.005;
      group.add(rug);
      break;
    }
    case 'paintings': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 0.04), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      frame.position.y = 1.5;
      group.add(frame);
      break;
    }

    // ==========================================
    // INDUSTRIAL / MILITARY
    // ==========================================
    case 'shipping_containers': {
      const container = new THREE.Mesh(new THREE.BoxGeometry(6, 2.4, 2.4), new THREE.MeshStandardMaterial({ color: 0x9b2c2c, metalness: 0.5 }));
      container.position.y = 1.2;
      group.add(container);
      break;
    }
    case 'oil_drums': {
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 20), new THREE.MeshStandardMaterial({ color: 0x2b6cb0, metalness: 0.7 }));
      drum.position.y = 0.6;
      group.add(drum);
      break;
    }
    case 'fuel_tanks': {
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 16), new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8 }));
      tank.rotation.z = Math.PI / 2;
      tank.position.y = 1;
      group.add(tank);
      break;
    }
    case 'generators':
    case 'transformers': {
      const gen = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xd69e2e, metalness: 0.6 }));
      gen.position.y = 0.6;
      group.add(gen);
      break;
    }
    case 'forklifts':
    case 'cranes':
    case 'machinery': {
      const base = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xd69e2e }));
      base.position.y = 0.6;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2, 0.2), new THREE.MeshStandardMaterial({ color: 0x1a202c }));
      arm.position.set(0.8, 1.5, 0);
      group.add(base, arm);
      break;
    }
    case 'sandbags': {
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 0.35), new THREE.MeshStandardMaterial({ color: 0xc6f6d5, roughness: 0.9 }));
      bag.position.y = 0.125;
      group.add(bag);
      break;
    }
    case 'barbed_wire': {
      const wire = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.02, 8, 24), new THREE.MeshStandardMaterial({ color: 0x718096, metalness: 0.9 }));
      wire.position.y = 0.4;
      group.add(wire);
      break;
    }
    case 'watchtowers': {
      [-0.8, 0.8].forEach(x => {
        [-0.8, 0.8].forEach(z => {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 4), new THREE.MeshStandardMaterial({ color: 0x4a5568 }));
          leg.position.set(x, 2, z);
          group.add(leg);
        });
      });
      const top = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 2), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
      top.position.y = 4.5;
      group.add(top);
      break;
    }
    case 'bunkers': {
      const bunker = new THREE.Mesh(new THREE.BoxGeometry(3, 1.5, 3), new THREE.MeshStandardMaterial({ color: 0x4a5568, roughness: 0.9 }));
      bunker.position.y = 0.75;
      group.add(bunker);
      break;
    }

    // ==========================================
    // WATER & LIQUID
    // ==========================================
    case 'water_planes___ocean_meshes':
    case 'rivers__spline_based_':
    case 'streams__spline_based_': {
      const water = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ color: 0x3182ce, transparent: true, opacity: 0.75, roughness: 0.1 }));
      water.rotation.x = -Math.PI / 2;
      group.add(water);
      break;
    }
    case 'puddles': {
      const puddle = new THREE.Mesh(new THREE.CircleGeometry(1.2, 16), new THREE.MeshStandardMaterial({ color: 0x2b6cb0, roughness: 0.1 }));
      puddle.rotation.x = -Math.PI / 2;
      puddle.position.y = 0.01;
      group.add(puddle);
      break;
    }
    case 'mud_patches': {
      const patch = new THREE.Mesh(new THREE.CircleGeometry(1.5, 16), new THREE.MeshStandardMaterial({ color: 0x52392f, roughness: 0.8 }));
      patch.rotation.x = -Math.PI / 2;
      patch.position.y = 0.01;
      group.add(patch);
      break;
    }
    case 'waterfalls': {
      const fall = new THREE.Mesh(new THREE.PlaneGeometry(2, 5), new THREE.MeshStandardMaterial({ color: 0x63b3ed, transparent: true, opacity: 0.8 }));
      fall.position.y = 2.5;
      group.add(fall);
      break;
    }

    // ==========================================
    // LIGHTING PROPS
    // ==========================================
    case 'lanterns':
    case 'torches':
    case 'candles': {
      const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 12), new THREE.MeshStandardMaterial({ color: 0xfffaf0 }));
      candle.position.y = 0.2;
      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff6600 }));
      flame.position.y = 0.42;
      group.add(candle, flame);
      break;
    }
    case 'spotlights':
    case 'flood_lights': {
      const lightBody = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.15, 0.5, 12), new THREE.MeshStandardMaterial({ color: 0x2d3748, metalness: 0.8 }));
      lightBody.rotation.x = Math.PI / 4;
      lightBody.position.y = 1;
      group.add(lightBody);
      break;
    }
    case 'neon_signs':
    case 'billboard_lights': {
      const sign = new THREE.Mesh(new THREE.BoxGeometry(2, 0.8, 0.1), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x00f0ff, emissiveIntensity: 0.8 }));
      sign.position.y = 2;
      group.add(sign);
      break;
    }
    case 'glowing_embers':
    case 'fire_pits': {
      const pit = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 0.3, 12), new THREE.MeshStandardMaterial({ color: 0x1a202c }));
      pit.position.y = 0.15;
      const ember = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), new THREE.MeshStandardMaterial({ color: 0xff4500, emissive: 0xff4500 }));
      ember.position.y = 0.2;
      group.add(pit, ember);
      break;
    }

    // ==========================================
    // ATMOSPHERIC / FX
    // ==========================================
    case 'particle_systems__fog__dust__smoke_': {
      const particleGeo = new THREE.BufferGeometry();
      const count = 50;
      const posArray = new Float32Array(count * 3);
      for(let i=0; i<count*3; i++) { posArray[i] = (Math.random() - 0.5) * 3; }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particleMat = new THREE.PointsMaterial({ size: 0.05, color: 0xcccccc, transparent: true, opacity: 0.6 });
      const particles = new THREE.Points(particleGeo, particleMat);
      particles.position.y = 1;
      group.add(particles);
      break;
    }
    case 'decals__cracks__stains__graffiti_': {
      const decal = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.7 }));
      decal.rotation.x = -Math.PI / 2;
      decal.position.y = 0.005;
      group.add(decal);
      break;
    }
    case 'skyboxes___sky_domes': {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(8, 16, 16), new THREE.MeshBasicMaterial({ color: 0x63b3ed, side: THREE.BackSide }));
      group.add(dome);
      break;
    }
    case 'ambient_occlusion_baked_meshes': {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xa0aec0, roughness: 0.5 }));
      mesh.position.y = 0.5;
      group.add(mesh);
      break;
    }

    // ==========================================
    // VEHICLES (STATIC)
    // ==========================================
    case 'abandoned_cars': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.9, 1.6), new THREE.MeshStandardMaterial({ color: 0xc53030, roughness: 0.8 }));
      body.position.y = 0.45;
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 1.4), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
      cabin.position.set(-0.2, 1.25, 0);
      group.add(body, cabin);
      break;
    }
    case 'trucks': {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.8, 1.8), new THREE.MeshStandardMaterial({ color: 0x2b6cb0 }));
      cab.position.set(1.5, 0.9, 0);
      const trailer = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.2, 1.8), new THREE.MeshStandardMaterial({ color: 0xedf2f7 }));
      trailer.position.set(-1, 1.1, 0);
      group.add(cab, trailer);
      break;
    }
    case 'buses': {
      const bus = new THREE.Mesh(new THREE.BoxGeometry(6, 2.2, 2), new THREE.MeshStandardMaterial({ color: 0xd69e2e }));
      bus.position.y = 1.1;
      group.add(bus);
      break;
    }
    case 'boats': {
      const hull = new THREE.Mesh(new THREE.ConeGeometry(1.2, 4, 4), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      hull.rotation.x = Math.PI / 2;
      hull.rotation.z = Math.PI / 2;
      hull.position.y = 0.3;
      group.add(hull);
      break;
    }
    case 'planes': {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 5, 12), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
      body.rotation.z = Math.PI / 2;
      body.position.y = 1;
      const wings = new THREE.Mesh(new THREE.BoxGeometry(1, 0.05, 5), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
      wings.position.set(0.5, 1, 0);
      group.add(body, wings);
      break;
    }
    case 'wreckage_pieces': {
      const piece = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7), new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.8 }));
      piece.position.y = 0.35;
      group.add(piece);
      break;
    }

    // ==========================================
    // SIGNAGE
    // ==========================================
    case 'road_signs':
    case 'warning_signs': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2), new THREE.MeshStandardMaterial({ color: 0x718096 }));
      pole.position.y = 1.1;
      const sign = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.03), new THREE.MeshStandardMaterial({ color: 0xd69e2e }));
      sign.position.set(0, 1.8, 0);
      sign.rotation.z = Math.PI / 4;
      group.add(pole, sign);
      break;
    }
    case 'billboards': {
      const board = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 0.1), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      board.position.y = 3.5;
      [-1.5, 1.5].forEach(x => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
        leg.position.set(x, 1.5, 0);
        group.add(leg);
      });
      group.add(board);
      break;
    }
    case 'posters':
    case 'shop_signs':
    case 'graffiti_text': {
      const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.2), new THREE.MeshBasicMaterial({ color: 0xe53e3e, side: THREE.DoubleSide }));
      poster.position.y = 1;
      group.add(poster);
      break;
    }

    // ==========================================
    // MODULAR KIT PIECES
    // ==========================================
    case 'wall_segments':
    case 'structural_walls': {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      wall.position.y = 1.5;
      group.add(wall);
      break;
    }
    case 'floor_tiles': {
      const floor = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 2), new THREE.MeshStandardMaterial({ color: 0xa0aec0 }));
      floor.position.y = 0.05;
      group.add(floor);
      break;
    }
    case 'ceiling_panels': {
      const ceiling = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 2), new THREE.MeshStandardMaterial({ color: 0xedf2f7 }));
      ceiling.position.y = 3;
      group.add(ceiling);
      break;
    }
    case 'corner_pieces': {
      const w1 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      w1.position.set(0.4, 1.5, 0);
      const w2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 1), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      w2.position.set(0, 1.5, 0.4);
      group.add(w1, w2);
      break;
    }
    case 't_junctions': {
      const mainW = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      mainW.position.y = 1.5;
      const subW = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 1), new THREE.MeshStandardMaterial({ color: 0xcbd5e0 }));
      subW.position.set(0, 1.5, 0.5);
      group.add(mainW, subW);
      break;
    }
    case 'doorframes': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, 0.2), new THREE.MeshStandardMaterial({ color: 0x718096, wireframe: true }));
      frame.position.y = 1.1;
      group.add(frame);
      break;
    }
    case 'window_frames': {
      const win = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.1), new THREE.MeshStandardMaterial({ color: 0x81e6d9, transparent: true, opacity: 0.5 }));
      win.position.y = 1.5;
      group.add(win);
      break;
    }
    case 'trim':
    case 'molding':
    case 'baseboards': {
      const baseboard = new THREE.Mesh(new THREE.BoxGeometry(2, 0.15, 0.05), new THREE.MeshStandardMaterial({ color: 0x2d3748 }));
      baseboard.position.y = 0.075;
      group.add(baseboard);
      break;
    }
    case 'dwg_imports': {
      const grid = new THREE.GridHelper(4, 8, 0x0000ff, 0x888888);
      grid.position.y = 0.01;
      group.add(grid);
      break;
    }

    default: {
      const fallback = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), new THREE.MeshStandardMaterial({ color: 0x3182ce }));
      fallback.position.y = 0.5;
      group.add(fallback);
      break;
    }
  }

  return group;
}
import * as THREE from 'three';

// Har ek item (Urban + Natural) ke liye dedicated Three.js 3D Mesh generator function
function createProceduralAsset(itemValue) {
  const group = new THREE.Group();

  switch (itemValue) {
    // ==========================================
    // NATURAL & GEOLOGICAL FEATURES (New Added)
    // ==========================================
    case 'mountains': {
      // Mountain ke liye ConeGeometry ya jagged shape use karte hain
      const mountain = new THREE.Mesh(
        new THREE.ConeGeometry(4, 6, 16),
        new THREE.MeshStandardMaterial({ color: 0x5c5c5c, roughness: 0.9 })
      );
      mountain.position.y = 3;
      // Snow cap top par
      const snow = new THREE.Mesh(
        new THREE.ConeGeometry(1.2, 1.5, 12),
        new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
      );
      snow.position.y = 5.25;
      group.add(mountain, snow);
      break;
    }
    case 'valleys': {
      // Valley do pahado ke beech ka rasta/depression
      const leftHill = new THREE.Mesh(new THREE.ConeGeometry(3, 4, 12), new THREE.MeshStandardMaterial({ color: 0x4a5d4e }));
      leftHill.position.set(-2.5, 2, 0);
      const rightHill = new THREE.Mesh(new THREE.ConeGeometry(3, 4, 12), new THREE.MeshStandardMaterial({ color: 0x4a5d4e }));
      rightHill.position.set(2.5, 2, 0);
      const valleyFloor = new THREE.Mesh(new THREE.PlaneGeometry(3, 6), new THREE.MeshStandardMaterial({ color: 0x3a5a40 }));
      valleyFloor.rotation.x = -Math.PI / 2;
      group.add(leftHill, rightHill, valleyFloor);
      break;
    }
    case 'sinkholes': {
      // Sinkhole matlab zameen ke andar ek bada gaddha (Cylinder/Ring)
      const outerRing = new THREE.Mesh(
        new THREE.RingGeometry(0.5, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0x3b2f2f, side: THREE.DoubleSide })
      );
      outerRing.rotation.x = -Math.PI / 2;
      outerRing.position.y = 0.01;
      const hole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0x111111 })
      );
      hole.position.y = -1;
      group.add(outerRing, hole);
      break;
    }
    case 'caves': {
      const caveArch = new THREE.Mesh(
        new THREE.TorusGeometry(1.5, 0.5, 8, 16, Math.PI),
        new THREE.MeshStandardMaterial({ color: 0x423d33, roughness: 1 })
      );
      caveArch.rotation.x = Math.PI / 2;
      caveArch.position.y = 0.5;
      group.add(caveArch);
      break;
    }
    case 'volcanos': {
      const volcanoBase = new THREE.Mesh(
        new THREE.ConeGeometry(4, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0x2b2b2b })
      );
      volcanoBase.position.y = 1.5;
      const crater = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.5, 0.6, 12),
        new THREE.MeshStandardMaterial({ color: 0xff3300, emissive: 0xff2200, emissiveIntensity: 0.8 })
      );
      crater.position.y = 2.7;
      group.add(volcanoBase, crater);
      break;
    }
    case 'craters': {
      const craterRim = new THREE.Mesh(
        new THREE.RingGeometry(1, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0x5e503f })
      );
      craterRim.rotation.x = -Math.PI / 2;
      craterRim.position.y = 0.02;
      group.add(craterRim);
      break;
    }
    case 'canyons':
    case 'gorges': {
      const wall1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 4, 6), new THREE.MeshStandardMaterial({ color: 0x8c6239 }));
      wall1.position.set(-2, 2, 0);
      const wall2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 4, 6), new THREE.MeshStandardMaterial({ color: 0x8c6239 }));
      wall2.position.set(2, 2, 0);
      group.add(wall1, wall2);
      break;
    }
    case 'waterfalls': {
      const cliff = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 2), new THREE.MeshStandardMaterial({ color: 0x555555 }));
      cliff.position.y = 2;
      const fall = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), new THREE.MeshStandardMaterial({ color: 0x63b3ed, transparent: true, opacity: 0.8 }));
      fall.position.set(0, 2, 1.01);
      group.add(cliff, fall);
      break;
    }

    // ==========================================
    // URBAN / STREET PROPS
    // ==========================================
    case 'street_lights': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 6, 16), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
      pole.position.y = 3;
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffffaa, emissive: 0xffffaa, emissiveIntensity: 1 }));
      lamp.position.set(0.6, 5.8, 0);
      group.add(pole, lamp);
      break;
    }
    case 'traffic_lights': {
      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.8, 0.6), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      housing.position.y = 4;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4, 12), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      pole.position.y = 2;
      group.add(housing, pole);
      break;
    }
    case 'benches': {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 0.8), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      seat.position.y = 0.5;
      const back = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.1), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      back.position.set(0, 0.8, -0.35);
      group.add(seat, back);
      break;
    }

    // ==========================================
    // VEGETATION
    // ==========================================
    case 'trees__oak__pine__palm__dead_': {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 2.5, 8), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      trunk.position.y = 1.25;
      const foliage = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3.5, 8), new THREE.MeshStandardMaterial({ color: 0x2d6a4f }));
      foliage.position.y = 3.5;
      group.add(trunk, foliage);
      break;
    }
    case 'bushes': {
      const bush = new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 12), new THREE.MeshStandardMaterial({ color: 0x40916c, roughness: 0.8 }));
      bush.position.y = 0.6;
      group.add(bush);
      break;
    }
    case 'rocks':
    case 'rock_formations': {
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), new THREE.MeshStandardMaterial({ color: 0x6c757d }));
      rock.position.y = 0.8;
      group.add(rock);
      break;
    }

    // Default Fallback
    default: {
      const fallback = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), new THREE.MeshStandardMaterial({ color: 0x3182ce }));
      fallback.position.y = 0.5;
      group.add(fallback);
      break;
    }
  }

  return group;
}
import * as THREE from 'three';

function createProceduralAsset(itemValue) {
  const group = new THREE.Group();

  switch (itemValue) {
    // ==========================================
    // NATURAL & GEOLOGICAL FEATURES (Mountains, Sinkholes, Valleys, etc.)
    // ==========================================
    case 'mountains': {
      const mountain = new THREE.Mesh(new THREE.ConeGeometry(4, 6, 16), new THREE.MeshStandardMaterial({ color: 0x5c5c5c, roughness: 0.9 }));
      mountain.position.y = 3;
      const snow = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.5, 12), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
      snow.position.y = 5.25;
      group.add(mountain, snow);
      break;
    }
    case 'valleys': {
      const leftHill = new THREE.Mesh(new THREE.ConeGeometry(3, 4, 12), new THREE.MeshStandardMaterial({ color: 0x4a5d4e }));
      leftHill.position.set(-2.5, 2, 0);
      const rightHill = new THREE.Mesh(new THREE.ConeGeometry(3, 4, 12), new THREE.MeshStandardMaterial({ color: 0x4a5d4e }));
      rightHill.position.set(2.5, 2, 0);
      const valleyFloor = new THREE.Mesh(new THREE.PlaneGeometry(3, 6), new THREE.MeshStandardMaterial({ color: 0x3a5a40 }));
      valleyFloor.rotation.x = -Math.PI / 2;
      group.add(leftHill, rightHill, valleyFloor);
      break;
    }
    case 'sinkholes': {
      const outerRing = new THREE.Mesh(new THREE.RingGeometry(0.5, 2, 16), new THREE.MeshStandardMaterial({ color: 0x3b2f2f, side: THREE.DoubleSide }));
      outerRing.rotation.x = -Math.PI / 2;
      outerRing.position.y = 0.01;
      const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2, 16), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      hole.position.y = -1;
      group.add(outerRing, hole);
      break;
    }
    case 'caves': {
      const caveArch = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.5, 8, 16, Math.PI), new THREE.MeshStandardMaterial({ color: 0x423d33, roughness: 1 }));
      caveArch.rotation.x = Math.PI / 2;
      caveArch.position.y = 0.5;
      group.add(caveArch);
      break;
    }
    case 'volcanos': {
      const volcanoBase = new THREE.Mesh(new THREE.ConeGeometry(4, 3, 16), new THREE.MeshStandardMaterial({ color: 0x2b2b2b }));
      volcanoBase.position.y = 1.5;
      const crater = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.5, 0.6, 12), new THREE.MeshStandardMaterial({ color: 0xff3300, emissive: 0xff2200, emissiveIntensity: 0.8 }));
      crater.position.y = 2.7;
      group.add(volcanoBase, crater);
      break;
    }
    case 'craters': {
      const craterRim = new THREE.Mesh(new THREE.RingGeometry(1, 2, 16), new THREE.MeshStandardMaterial({ color: 0x5e503f }));
      craterRim.rotation.x = -Math.PI / 2;
      craterRim.position.y = 0.02;
      group.add(craterRim);
      break;
    }
    case 'canyons':
    case 'gorges': {
      const wall1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 4, 6), new THREE.MeshStandardMaterial({ color: 0x8c6239 }));
      wall1.position.set(-2, 2, 0);
      const wall2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 4, 6), new THREE.MeshStandardMaterial({ color: 0x8c6239 }));
      wall2.position.set(2, 2, 0);
      group.add(wall1, wall2);
      break;
    }
    case 'waterfalls': {
      const cliff = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 2), new THREE.MeshStandardMaterial({ color: 0x555555 }));
      cliff.position.y = 2;
      const fall = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), new THREE.MeshStandardMaterial({ color: 0x63b3ed, transparent: true, opacity: 0.8 }));
      fall.position.set(0, 2, 1.01);
      group.add(cliff, fall);
      break;
    }

    // ==========================================
    // URBAN / STREET PROPS
    // ==========================================
    case 'street_lights': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 6, 16), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
      pole.position.y = 3;
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffffaa, emissive: 0xffffaa, emissiveIntensity: 1 }));
      lamp.position.set(0.6, 5.8, 0);
      group.add(pole, lamp);
      break;
    }
    case 'traffic_lights': {
      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.8, 0.6), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      housing.position.y = 4;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4, 12), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      pole.position.y = 2;
      group.add(housing, pole);
      break;
    }
    case 'benches': {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 0.8), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      seat.position.y = 0.5;
      const back = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.1), new THREE.MeshStandardMaterial({ color: 0x8B5A2B }));
      back.position.set(0, 0.8, -0.35);
      group.add(seat, back);
      break;
    }
    case 'bus_stops': {
      const roof = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 2), new THREE.MeshStandardMaterial({ color: 0x444444 }));
      roof.position.y = 2.5;
      group.add(roof);
      break;
    }
    case 'dumpsters': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.3, 1.3), new THREE.MeshStandardMaterial({ color: 0x1E4D2B }));
      body.position.y = 0.65;
      group.add(body);
      break;
    }
    case 'trash_cans': {
      const can = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.35, 0.9, 16), new THREE.MeshStandardMaterial({ color: 0x444444 }));
      can.position.y = 0.45;
      group.add(can);
      break;
    }
    case 'fire_hydrants': {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.8, 12), new THREE.MeshStandardMaterial({ color: 0xCC0000 }));
      body.position.y = 0.4;
      group.add(body);
      break;
    }

    // ==========================================
    // TERRAIN & GROUND
    // ==========================================
    case 'ground_tiles___terrain_meshes': {
      const tile = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ color: 0x3a5a40 }));
      tile.rotation.x = -Math.PI / 2;
      group.add(tile);
      break;
    }
    case 'cliff_faces': {
      const cliff = new THREE.Mesh(new THREE.BoxGeometry(6, 5, 2), new THREE.MeshStandardMaterial({ color: 0x555555 }));
      cliff.position.y = 2.5;
      group.add(cliff);
      break;
    }
    case 'rock_formations': {
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), new THREE.MeshStandardMaterial({ color: 0x6c757d }));
      rock.position.y = 0.8;
      group.add(rock);
      break;
    }
    case 'roads': {
      const road = new THREE.Mesh(new THREE.PlaneGeometry(6, 12), new THREE.MeshStandardMaterial({ color: 0x222222 }));
      road.rotation.x = -Math.PI / 2;
      road.position.y = 0.01;
      group.add(road);
      break;
    }

    // ==========================================
    // VEGETATION
    // ==========================================
    case 'trees__oak__pine__palm__dead_': {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 2.5, 8), new THREE.MeshStandardMaterial({ color: 0x5c4033 }));
      trunk.position.y = 1.25;
      const foliage = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3.5, 8), new THREE.MeshStandardMaterial({ color: 0x2d6a4f }));
      foliage.position.y = 3.5;
      group.add(trunk, foliage);
      break;
    }
    case 'bushes': {
      const bush = new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 12), new THREE.MeshStandardMaterial({ color: 0x40916c }));
      bush.position.y = 0.6;
      group.add(bush);
      break;
    }
    case 'flowers': {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5), new THREE.MeshStandardMaterial({ color: 0x2d6a4f }));
      stem.position.y = 0.25;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshStandardMaterial({ color: 0xff4d6d }));
      petal.position.y = 0.5;
      group.add(stem, petal);
      break;
    }

    // ==========================================
    // STRUCTURES & ARCHITECTURE
    // ==========================================
    case 'buildings': {
      const bldg = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), new THREE.MeshStandardMaterial({ color: 0x999999 }));
      bldg.position.y = 3;
      group.add(bldg);
      break;
    }
    case 'walls': {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(4, 2.5, 0.3), new THREE.MeshStandardMaterial({ color: 0x777777 }));
      wall.position.y = 1.25;
      group.add(wall);
      break;
    }
    case 'bridges': {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 2), new THREE.MeshStandardMaterial({ color: 0x666666 }));
      arch.position.y = 1.5;
      group.add(arch);
      break;
    }

    // ==========================================
    // INTERIOR / INDOOR PROPS
    // ==========================================
    case 'tables':
    case 'desks': {
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.9), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      top.position.y = 0.75;
      group.add(top);
      break;
    }
    case 'chairs': {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.5), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
      seat.position.y = 0.45;
      group.add(seat);
      break;
    }

    // ==========================================
    // INDUSTRIAL / MILITARY
    // ==========================================
    case 'shipping_containers': {
      const container = new THREE.Mesh(new THREE.BoxGeometry(6, 2.4, 2.4), new THREE.MeshStandardMaterial({ color: 0x9b2c2c }));
      container.position.y = 1.2;
      group.add(container);
      break;
    }
    case 'oil_drums': {
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 20), new THREE.MeshStandardMaterial({ color: 0x2b6cb0 }));
      drum.position.y = 0.6;
      group.add(drum);
      break;
    }

    // ==========================================
    // WATER & LIQUID / FX / VEHICLES / SIGNAGE
    // ==========================================
    case 'water_planes___ocean_meshes': {
      const water = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ color: 0x3182ce, transparent: true, opacity: 0.75 }));
      water.rotation.x = -Math.PI / 2;
      group.add(water);
      break;
    }
    case 'abandoned_cars': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.9, 1.6), new THREE.MeshStandardMaterial({ color: 0xc53030 }));
      body.position.y = 0.45;
      group.add(body);
      break;
    }
    case 'road_signs': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2), new THREE.MeshStandardMaterial({ color: 0x718096 }));
      pole.position.y = 1.1;
      group.add(pole);
      break;
    }

    // Default Fallback
    default: {
      const fallback = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), new THREE.MeshStandardMaterial({ color: 0x3182ce }));
      fallback.position.y = 0.5;
      group.add(fallback);
      break;
    }
  }

  return group;
}
import * as THREE from 'three';

// Switch statement mein ye do cases add karein:

case 'mossed_walls': {
  // Main concrete/stone wall base
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
  const wall = new THREE.Mesh(new THREE.BoxGeometry(4, 2.5, 0.3), wallMat);
  wall.position.y = 1.25;

  // Moss Overlay (Thoda aage displacement ke sath, green patches)
  const mossMat = new THREE.MeshStandardMaterial({ 
    color: 0x2d6a4f, 
    roughness: 1.0, 
    transparent: true, 
    opacity: 0.85 
  });
  
  const mossPatch1 = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.2), mossMat);
  mossPatch1.position.set(-0.8, 0.8, 0.16); // Front side moss patch

  const mossPatch2 = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.8), mossMat);
  mossPatch2.position.set(1.0, 0.5, 0.16);

  group.add(wall, mossPatch1, mossPatch2);
  break;
}

case 'broken_walls': {
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.85 });

  // Standable base part of broken wall
  const mainSection = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.5, 0.3), wallMat);
  mainSection.position.set(-0.75, 1.25, 0);

  // Partial lower section (jagged edge effect)
  const lowSection = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 0.3), wallMat);
  lowSection.position.set(1.25, 0.6, 0);

  // Fallen rubble debris chunks on the ground
  const rubbleMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
  for (let i = 0; i < 5; i++) {
    const chunk = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.15 + Math.random() * 0.15), 
      rubbleMat
    );
    chunk.position.set(
      0.5 + (Math.random() - 0.5) * 1.5,
      0.1,
      (Math.random() - 0.5) * 0.8
    );
    chunk.rotation.set(Math.random(), Math.random(), Math.random());
    group.add(chunk);
  }

  group.add(mainSection, lowSection);
  break;
}
import * as THREE from 'three';

// Switch statement mein ye cases add karein:

case 'house': {
  // Exterior Walls
  const extWallMat = new THREE.MeshStandardMaterial({ color: 0xd9c5b2, roughness: 0.8 });
  const extWalls = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 4), extWallMat);
  extWalls.position.y = 1.5;

  // Roof
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.8, 1.8, 4),
    new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.6 })
  );
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 3.9;

  // Interior Floor
  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(4.8, 0.1, 3.8),
    new THREE.MeshStandardMaterial({ color: 0x5c4033 })
  );
  floor.position.y = 0.05;

  // Interior Partition Wall (Dividing Rooms)
  const innerWall = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 2.8, 3.6),
    new THREE.MeshStandardMaterial({ color: 0xf0e68c })
  );
  innerWall.position.set(0, 1.4, 0);

  // Interior Furniture (Table & Bed)
  const bed = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 1.5), new THREE.MeshStandardMaterial({ color: 0x2b2d42 }));
  bed.position.set(-1.5, 0.25, -0.8);
  
  const table = new THREE.Mesh(new THREE.BoxGeometry(1, 0.5, 0.8), new THREE.MeshStandardMaterial({ color: 0x8b5a2b }));
  table.position.set(1.3, 0.3, 0.8);

  // Exterior Door & Windows
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.8, 0.1), new THREE.MeshStandardMaterial({ color: 0x4a2c11 }));
  door.position.set(-1, 0.9, 2.01);

  const windowMat = new THREE.MeshStandardMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.6 });
  const win1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.1), windowMat);
  win1.position.set(1.2, 1.8, 2.01);

  group.add(extWalls, roof, floor, innerWall, bed, table, door, win1);
  break;
}

case 'mansion': {
  // Main Structure (Exterior Two-Story)
  const mainBody = new THREE.Mesh(
    new THREE.BoxGeometry(9, 5, 6),
    new THREE.MeshStandardMaterial({ color: 0xeaeaea, roughness: 0.4 })
  );
  mainBody.position.y = 2.5;

  // Roof Structure
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(9.4, 0.4, 6.4),
    new THREE.MeshStandardMaterial({ color: 0x222222 })
  );
  roof.position.y = 5.2;

  // Interior First & Second Floor Planes
  const floor1 = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.1, 5.6), new THREE.MeshStandardMaterial({ color: 0x333333 }));
  floor1.position.y = 0.05;
  
  const floor2 = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.1, 5.6), new THREE.MeshStandardMaterial({ color: 0x8b5a2b }));
  floor2.position.y = 2.5;

  // Interior Staircase
  for (let i = 0; i < 10; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, 0.3), new THREE.MeshStandardMaterial({ color: 0xd4af37 }));
    step.position.set(2, i * 0.25 + 0.125, -2 + i * 0.25);
    group.add(step);
  }

  // Grand Entrance Columns (Exterior Front)
  [-2.5, -1, 1, 2.5].forEach(x => {
    const column = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.25, 4.8, 16),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    column.position.set(x, 2.4, 3.3);
    group.add(column);
  });

  // Main Double Door
  const grandDoor = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.1), new THREE.MeshStandardMaterial({ color: 0x3a1e05 }));
  grandDoor.position.set(0, 1.1, 3.01);

  // Large Windows (Glass Panes)
  const glassMat = new THREE.MeshStandardMaterial({ color: 0xa0c4ff, transparent: true, opacity: 0.5 });
  [-3, 3].forEach(x => {
    const winGround = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 0.1), glassMat);
    winGround.position.set(x, 1.2, 3.01);

    const winUpper = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 0.1), glassMat);
    winUpper.position.set(x, 3.7, 3.01);

    group.add(winGround, winUpper);
  });

  group.add(mainBody, roof, floor1, floor2, grandDoor);
  break;
}